import React, { Component } from "react";
import { connect } from "react-redux";
import "../../css/login.css";
import "../../css/variables.css";
import { getSignUp } from "../auth/firebase";
import fire from "../auth/firebaseConfig";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import { emailValid, textValid, mobileValid, passwrodValid, } from "../validator/formValidator";
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { ScaleLoader } from "react-spinners"
import { getCities } from "../service/metaDataService";



const errorElements = {
    emailError: '',
    nameError: '',
    mobileError: '',
    passwordError: '',
    workEmailError: ''
}


export class personal extends Component {
    constructor() {
        super();
        this.state = { 
            newAccount: true,
            phone: '',
            errorMessage: '',
            errors: errorElements,
            cities: '',
            activeTab: "activeTab",//see for another options
            showLoader: false,
        };
    }

    handleSignup = () => {
        this.setState({ errorMessage: '' })//clearing errors
        getSignUp(
            this.props.employerSignUp.emailId,
            this.props.employerSignUp.password
        )
            .then(() => {
                this.callChangeEmployerData(this.state.activeTab, this.props.employerSignUp.activeTab + 1);
                this.callChangeLogInStatus("loggedIn", true);
                this.callChangeUserType("recruiter", true);
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
            this.callChangeLogInStatus("loggedIn", false);
        });
    };

    callChangeUserType = (key, value) => {
        let sendData = {
            ...this.props.recruiter,
            [key]: value,
        }
        this.props.changeUserType(sendData);
    }

    callChangeEmployerData = (key, value) => {
        let sendData = {
            ...this.props.employerSignUp,
            [key]: value,
        }
        this.props.changeEmployerData(sendData);
    }

    callChangeEmployerData = (key, value) => {
        let sendData = {
            ...this.props.employerSignUp,
            [key]: value,
        }
        this.props.changeEmployerData(sendData);
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
        else if (this.props.employerSignUp.emailId && this.props.employerSignUp.name && this.props.employerSignUp.mobile && this.props.employerSignUp.city && this.props.employerSignUp.workEmailId && this.props.employerSignUp.password) {
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
        this.callChangeEmployerData(id, value);
    };

    handleDropdownOnClick = (e) => {
        // console.log("e.target.id", e.target.id);
        this.setState({
            degreeDropDown: e.target.id,
        });
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
                    <form id="my-fo" style={{marginTop: "234px"}}>
                        <h2>Sign - Up</h2>
                        <span className="err">{this.state.errorMessage}</span>
                        <div className="my-dp">
                            {
                                this.state.newAccount ?
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
                                        <span className="error">{this.state.errors.mobileError}</span>
                                        <br /> 

                                        <div className="num">
                                            <label className="lab"> City<span className="req"> *</span>: </label>

                                            <Select
                                                id="currentCity"
                                                options={this.state.cities}
                                                autoComplete="off"
                                                className="inp"
                                                onChange={(city) => this.handleChange("city", city.label)}
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
                                            <label className="lab"> Work Email<span className="req"> *</span>: </label>
                                            <input className="in" type="text" autoComplete="off" placeholder="Enter Your Email Address" id="workEmailId" onChange={(e) => {
                                                this.setState({
                                                    errors: {
                                                        ...this.state.errors,
                                                        workEmailError: emailValid(e.target.value),
                                                    }
                                                });
                                                this.handleChange(e.target.id, e.target.value);
                                            }} />
                                        </div>
                                        <span class="error">{this.state.errors.workEmailError}</span>


                                        <br />

                                        <div className="num">
                                            <label className="lab"> Password<span className="req"> *</span>: </label>
                                            <input className="in" type="password" id="password" placeholder="Create a Password" onChange={(e) => {
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
                                    : ''
                            } 
                            <div className="but-d">
                                <button className="but" onClick={this.handleOnClick}> Register </button>
                                <div className="loader">
                                    {
                                        this.state.showLoader ?
                                            <ScaleLoader size={90} color={"#123abc"} loading={this.state.loading} speedMultiplier={1.5} /> : ''
                                    }
                                </div>
                                <p>Already have an account?<span className="log" onClick={() => this.callChangeEmployerData("newAccount", false)}><strong> Login</strong></span></p>
                            </div>

                        </div>


                        {/* // } */}
                    </form>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        employerSignUp: state.employerSignUp,
        header: state.header,
        recruiter: state.recruiter,
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
        changeEmployerData: (employerSignUp) => {
            dispatch({
                type: "CHANGE_EMPLOYER_SIGNUP_DATA",
                employerSignUp: employerSignUp,
            });
        },
        changeUserType: (recruiter) => {
            dispatch({
                type: "CHANGE_USER_TYPE",
                recruiter: recruiter,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(personal);