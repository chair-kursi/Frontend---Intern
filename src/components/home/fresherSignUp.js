import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/login.css";
import "../../css/variables.css";
import Progress from './progress';
import { getSignUp } from "../auth/firebase";
import fire from "../auth/firebaseConfig";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import { emailValid, textValid, mobileValid, passwrodValid, } from "../validator/formValidator";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import Educational from "./fresher/educational";
import { ScaleLoader } from "react-spinners" 
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import {cityList} from '../../assets/data/formData'


 
const errorElements = {
  emailError: '',
  nameError: '',
  mobileError: '',
  passwordError: ''
}
 
export class fresherSignUp extends Component {
  constructor() {
    super();
    this.state = {
      degreeDropDown: "Choose Degree",
      skills: '',
      // newAccount: this.props.header.loggedIn,  
      newAccount: true,
      phone: '',
      errorMessage: '',
      errors: errorElements,
      activeTab: "activeTab",//see for another options
      showLoader: false,
    };
  }


  handleSignup = () => {
    this.setState({ errorMessage: '' })//clearing errors
    getSignUp(
      this.props.fresherSignUp.emailId,
      this.props.fresherSignUp.password
    )
      .then(() => {
        this.callChangeFormData(this.state.activeTab, this.props.fresherSignUp.activeTab + 1);
        this.callChangeLogInStatus("loggedIn", true);
        this.setState({
          showLoader: false
        })
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            this.setState({ errorMessage: err.message });
            break;
          case "auth/weak-password":
            this.setState({ errorMessage: err.message });
            break;
        }
      });
  };

  handleLogout = () => {
    fire.auth().signOut().then(() => {
      this.callChangeLogInStatus("loggedIn", false)
    });
  };

  callChangeFormData = (key, value) => {
    let sendData = {
      ...this.props.fresherSignUp,
      [key]: value,
    }
    this.props.changeFormData(sendData);
  }

  callChangeLogInStatus = (key, value) => {
    let sendData = {
      ...this.props.header,
      [key]: value
    }
    this.props.changeLogInStatus(sendData);
  }

  handleOnClick = (e) => {
    e.preventDefault();

    if (this.state.errorMessage || this.state.errors.emailError || this.state.errors.mobileError || this.state.errors.nameError || this.state.errors.passwordError) {
      //Don't do anything, as error is already displaying
    }
    else if (this.props.fresherSignUp.emailId && this.props.fresherSignUp.name && this.props.fresherSignUp.mobile && this.props.fresherSignUp.currentCity && this.props.fresherSignUp.password) {
      this.handleSignup();
      this.setState({
        showLoader: true
      })
    }
    else {
      this.setState({ errorMessage: "Please fill all the required (*) fields" });
    }
  };

  handleChange = (id, value) => {
    this.callChangeFormData(id, value);
  };
 
  componentDidMount() {
    this.setState({
      newAccount: !this.props.header.loggedIn
    })
  }

  render() {

      var index = 0;
      var cityObjectList =  cityList.map(function(city){
          index = index+1;
          return {label:city,value:index}
      });
    
    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (
      <div id="temporary">
        <div>
          {
            !this.props.fresherSignUp.activeTab ? '' :
              <form id="my-formss">
                <p className="cross" onClick={() => this.callChangeFormData("activeTab", 0)}> <i class="fas fa-times-circle fa-2x"></i> </p>
                {
                  !this.props.fresherSignUp.activeTab ? '' :
                    <Progress />
                }
                <span className="err">{this.state.errorMessage}</span>
                {
                  this.props.fresherSignUp.activeTab === 1 ?
                    <div className="my-d">
                      <div className="log-f">
                        <div className="num row">
                          <label className="lab col-sm-10 col-lg-3"> Name<span className="req"> *</span>: </label>
                          <input className="in col-sm-10 col-lg-9" autoComplete="off" type="text" id="name" placeholder="Enter Your Full Name" onChange={(e) => {
                            this.setState({
                              errors: {
                                ...this.state.errors,
                                nameError: textValid(e.target.value),
                              }
                            });
                            this.handleChange(e.target.id, e.target.value);
                          }} />
                        </div>
                        <span className="error">{this.state.errors.nameError}</span>
                        <br />

                        <div className="num row">
                        <div className="lab col-sm-10 col-lg-3">
                          <label className=""> Phone<span className="req"> *</span>: </label>
                          
                        </div>
                          <div  className="col-sm-10 col-lg-9">
                            <PhoneInput
                            country={'in'}
                            value={this.state.phone}
                            autoComplete="off"
                            onChange={phone => {
                              this.setState({ phone })
                              this.setState({
                                errors: {
                                  ...this.state.errors,
                                  mobileError: mobileValid(phone)
                                }
                              })
                              this.handleChange("mobile", phone)
                            }}
                            id="mobile"
                            className="inp"
                          />
                          </div>
                          
                        </div>
                        <span className="error">{this.state.errors.mobileError}</span>
                        <br />

                        <div className="num row">
                          <label className="lab col-sm-10 col-lg-3"> City<span className="req"> *</span>: </label>

                          <Select
                            id="currentCity"
                            options={cityObjectList}
                            autoComplete="off"
                            className="inp col-sm-10 col-lg-9"
                            onChange={(city) => this.handleChange("currentCity", city.label)}
                          />

                          {/* ALTERNATE FOR CITY DROPDOWN
                                  <select name="country" class="countries order-alpha" id="countryId">
                                      <option value="">Select Country</option>
                                  </select>
                                  <select name="state" class="states order-alpha" id="stateId">
                                      <option value="">Select State</option>
                                  </select>
                                  <select name="city" class="cities order-alpha" id="cityId">
                                      <option value="">Select City</option>
                                  </select> */}

                        </div>
                        <br />

                        <div className="num row">
                          <label className="lab col-sm-10 col-lg-3"> Email<span className="req"> *</span>: </label>
                          <input className="in col-sm-10 col-lg-9" type="text" autoComplete="off" placeholder="Enter Your Email Address" id="emailId" onChange={(e) => {
                            this.setState({
                              errors: {
                                ...this.state.errors,
                                emailError: emailValid(e.target.value),
                              }
                            });
                            this.handleChange(e.target.id, e.target.value);
                          }} />
                        </div>
                        <span class="error">{this.state.errors.emailError}</span>


                        <br />

                        <div className="num row">
                          <label className="lab col-sm-10 col-lg-3"> Password<span className="req"> *</span>: </label>
                          <input className="in col-sm-10 col-lg-9" type="password" id="password" placeholder="Create a Password" onChange={(e) => {
                            this.setState({
                              errors: {
                                ...this.state.errors,
                                passwordError: passwrodValid(e.target.value),
                              }
                            });
                            this.handleChange(e.target.id, e.target.value);
                          }} />
                        </div>
                        <span className="error psd">{this.state.errors.passwordError}</span>

                        <br />
                      </div>
                      <div className="num row">
                      <div className="lab col-sm-10 col-lg-3">
                      <label className=""> Resume  : </label>
                       
                      </div>
                      <div className="col-sm-10 col-lg-9">
                        <Upload {...props}>
                          <div className="ins col-sm-10 col-lg-9">
                            <Button icon={<UploadOutlined />}>Upload Resume</Button>
                          </div>
                        </Upload>
                      </div>
                         
                      </div>
                      <div className="but-d">
                        <button className="but" onClick={this.handleOnClick}> Register </button>
                        <div className="loader">
                          {
                            this.state.showLoader ?
                              <ScaleLoader size={90} color={"#123abc"} loading={this.state.loading} speedMultiplier={1.5} /> : ''
                          }
                        </div>
                        <p>Already have an account?<span className="log" onClick={() => this.callChangeLogInStatus("newAccount", false)}><strong> Login</strong></span></p>
                      </div>

                    </div> :
                    this.props.fresherSignUp.activeTab === 2 ?
                      <Educational /> : ''
                }
              </form> 
          }
          </div>
        </div>
          );
  }
}

const mapStateToProps = (state) => {
  return {
          fresherSignUp: state.fresherSignUp,
          header: state.header
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
            changeFormData: (fresherSignup) => {
            dispatch({
              type: "CHANGE_FRESHER_SIGNUP_DATA",
              fresherSignup: fresherSignup,
            });
    },
    changeLogInStatus: (header) => {
            dispatch({
              type: "USER_DID_LOG_IN",
              header: header
            })
          }
  };
};

 export default connect(mapStateToProps, mapDispatchToProps)(fresherSignUp);