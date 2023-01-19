import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import '../../css/header.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'


class Banner extends Component {

    callChangeFormData = (key, value) => {
        let sendData = {
            ...this.props.fresherSignUp,
            [key]: value,
        }
        this.props.changeFormData(sendData);
    }

    callChangeProfessionalFormData = (key, value) => {
        let sendData = {
            ...this.props.professionalSignUp,
            [key]: value,
        }
        this.props.changeProfessionalFormData(sendData);
    }

    callChangeLogInStatus = (key, value) => {
        let sendData = {
            ...this.props.header,
            [key]: value
        }
        this.props.changeLogInStatus(sendData);
    }

    experiencedClicked = (e) => {
        e.preventDefault();
        this.props.changeScrollId("experienced")
        this.callChangeProfessionalFormData("activeTab", 1)
        this.callChangeFormData("activeTab", 0)
        this.callChangeLogInStatus("newAccount", true)
    }

    fresherClicked = (e) => {
        e.preventDefault();
        this.props.changeScrollId("fresher")
        this.callChangeFormData("activeTab", 1)
        this.callChangeProfessionalFormData("activeTab", 0)
        this.callChangeLogInStatus("newAccount", true)
    }

    render() {
        return (
            <div className="banner">
                <div>
                    <div className="box">


                    </div>
                    <div className="banner-head">
                        <p>Get Your Dream Job Today
                        </p>
                        <p className="para">If you are searching for your next job, please choose one of the options below</p>
                        <div className="part1">
                            <ScrollLink to='1' smooth={true} duration={1000}><Button variant="primary" className="bton1" onClick={(e) => this.experiencedClicked(e)}>I am Experienced</Button></ScrollLink>
                            <p className="pr1">I have at least 1 month <br />of work experience</p>
                        </div>
                        <div className="part2">
                            <ScrollLink to='2' smooth={true} duration={1000}><Button
                                variant="primary"
                                id="fr-but"
                                className="bton2"
                                onClick={(e) => this.fresherClicked(e)}
                            >
                                I am a Fresher
                            </Button></ScrollLink>
                            <p className="pr2">I have just graduated <br />I haven't worked after graduation</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        fresherSignUp: state.fresherSignUp,
        professionalSignUp: state.professionalSignUp,
        header: state.header
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFormData: (fresherSignup) => {
            dispatch({
                type: "CHANGE_FRESHER_SIGNUP_DATA",
                fresherSignup: fresherSignup,
            });
        },
        changeProfessionalFormData: (professionalSignUp) => {
            dispatch({
                type: "CHANGE_PROFESSIONAL_SIGNUP_DATA",
                professionalSignUp: professionalSignUp,
            });
        },
        changeLogInStatus: (header) => {
            dispatch({
                type: "USER_DID_LOG_IN",
                header: header
            })
        },
        changeScrollId: (scrollId) => {
            dispatch({
                type: "CHANGE_SCROLL_ID",
                scrollId: scrollId,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
