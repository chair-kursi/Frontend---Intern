import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../css/login.css";
import "../../../css/variables.css";
import { getLogin, getSignUp } from "../../auth/firebase";
import fire from "../../auth/firebaseConfig";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select'; 
import { emailValid, textValid, mobileValid, passwrodValid, } from "../../validator/formValidator";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';  
import { ScaleLoader } from "react-spinners"
import Login from "../login"; 
import { getCities } from '../../service/metaDataService'

const errorElements = {
  emailError: '',
  nameError: '',
  mobileError:'',
  passwordError: ''
}

export class personal extends Component {
  constructor() {
    super();
    this.state = { 
      newAccount: true,  
      phone: '',
      errorMessage: '',
      errors: errorElements,
      cities: [], 
      showLoader:false,
    };
  } 
 

  handleSignup = () => {
    this.setState({ errorMessage: '' })//clearing errors
    getSignUp(
      this.props.professionalSignUp.emailId,
      this.props.professionalSignUp.password
    )
      .then(() => {  
        this.callChangeProfessionalData("activeTab", this.props.professionalSignUp.activeTab + 1); 
        this.callChangeLogInStatus("loggedIn", true);
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
 

  callChangeProfessionalData = (key, value) => {
    let sendData = {
      ...this.props.professionalSignUp,
      [key]: value,
    }
    this.props.changeProfessionalData(sendData);
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
    else if (this.props.professionalSignUp.emailId && this.props.professionalSignUp.name && this.props.professionalSignUp.mobile && this.props.professionalSignUp.currentCity && this.props.professionalSignUp.password) { 
      this.handleSignup();
      this.setState({
        showLoader:true
      })
    }
    else {
      this.setState({ errorMessage: "Please fill all the required (*) fields" });
    }
  };

  handleChange = (id, value) => {
    this.callChangeProfessionalData(id, value);  
  }; 
  
  componentDidMount(){
    this.setState({cities: getCities(this.props.metaData.metaData.cities)})
  }

  render() {


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
      <div> 
        <div>  
          {  
            !this.props.professionalSignUp.activeTab?'':
            <form id="my-fo"> 
            <span className="err">{this.state.errorMessage}</span> 
              <div className="my-dp">
                {
                this.state.newAccount?
                <div className="log-f">
                  <div className="num">
                  <label className="lab"> Name<span className="req"> *</span>: </label>
                  <input className="in" autoComplete="off" type="text" id="name" placeholder="Enter Your Full Name" onChange={(e) => {
                    this.setState({
                      errors: {
                        ...this.state.errors, 
                        nameError: textValid(e.target.value),
                      }
                    });
                    this.handleChange(e.target.id, e.target.value);
                  }} />
                </div>
                <span className="err">{this.state.errors.nameError}</span>
                <br />

                <div className="num">
                  <label className="lab"> Phone<span className="req"> *</span>: </label>
                  <PhoneInput
                    country={'in'}
                    value={this.state.phone}
                    autoComplete="off"
                    onChange={phone => {
                      this.setState({ phone }) 
                      this.setState({
                        errors:{
                          ...this.state.errors,
                          mobileError:mobileValid(phone)
                        }
                      })
                      this.handleChange("mobile", phone) 
                    }}
                    id="mobile"
                    className="inp"
                  />
                </div>
                <span className="error">{this.state.errors.mobileError}</span>
                <br />

                <div className="num">
                  <label className="lab"> City<span className="req"> *</span>: </label>

                  <Select
                    id="currentCity"
                    options={this.state.cities}
                    autoComplete="off"
                    className="inp"
                    onClick = {console.log("metaData: ", this.props.metaData)}
                    onChange={(city) =>{ this.handleChange("currentCity", city.label)}}
                  /> 

                </div>
                <br />
              

                  

            <div className="num">
              <label className="lab"> Email<span className="req"> *</span>: </label>
              <input className="in" type="text" autoComplete="off" placeholder="Enter Your Email Address" id="emailId" onChange={(e) => {
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

            <div className="num">
              <label className="lab"> Password<span className="req"> *</span>: </label>
              <input className="in" type="password"  id="password" placeholder="Create a Password" onChange={(e) => { 
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
            :''
              } 
              <div>
            <div className="num">
              <label className="lab"> Resume : </label>
              <Upload {...props}>
                <div className="ins">
                  <Button icon={<UploadOutlined />}>Upload Resume</Button>
                </div> 
              </Upload>
            </div>
            <br />
            </div> 
              <div className="but-d">
                <button className="but"  onClick={this.handleOnClick}> Register </button>
                <div className="loader">
                {
                  this.state.showLoader?
                  <ScaleLoader  size={90} color={"#123abc"} loading={this.state.loading} speedMultiplier={1.5}/>:''
                } 
                </div>
                <p>Already have an account?<span className="log" onClick={()=>this.callChangeLogInStatus("newAccount", false)}><strong> Login</strong></span></p> 
                </div>  
            
            </div>
             
        
        {/* // } */}
          </form> 
  }
        </div>  
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  return { 
    professionalSignUp: state.professionalSignUp,
    header: state.header,
    metaData: state.metaData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    changeLogInStatus: (header) => {
      dispatch({
        type: "USER_DID_LOG_IN",
        header: header 
      })
    },
    changeProfessionalData: (professionalSignUp) => {
      dispatch({
        type: "CHANGE_PROFESSIONAL_SIGNUP_DATA",
        professionalSignUp: professionalSignUp,
      });
    },  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(personal);