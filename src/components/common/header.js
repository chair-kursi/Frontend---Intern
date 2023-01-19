import React, { Component } from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { connect } from 'react-redux';
import logo from "../../assets/img/pic1.png";
import '../../css/header.css';
import { handleLogout } from '../auth/firebase';
import fire from 'firebase';
// import { NavHashLink, } from 'react-router-hash-link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'



class header extends Component { 

    constructor(props) {
        super(props)
    
        this.state = {
            link1: '',
        }
    }
    

    callChangeLogInStatus = (key, value) => {
        let sendData = {
            ...this.props.header,
            [key]: value
        }
        this.props.changeLogInStatus(sendData);
    }

    callChangeFresherData = (key, value) => {
        let sendData = {
            ...this.props.fresherSignUp,
            [key]: value
        }
        this.props.changeFresherData(sendData);
    }

    callChangeProfessionalData = (key, value) => {
        let sendData = {
            ...this.props.professionalSignUp,
            [key]: value
        }
        this.props.changeProfessionalData(sendData);
    }

    callChangeEmployerData = (key, value) => {
        let sendData = {
            ...this.props.employerSignUp,
            [key]: value
        }
        this.props.changeEmployerData(sendData);
    }

    // handleAuthListner = () => {
    //     this.callChangeLogInStatus("loggedIn", true)
    //     this.callChangeLogInStatus("showEmployee", true);
    // }

    

    handleSignInOnClick = () => { 
        this.props.changeScrollId("signIn")
        if(this.props.employerSignUp.newAccount)
        this.callChangeEmployerData("newAccount", false)
        else this.callChangeLogInStatus("newAccount", false)
    }

    handleLogoOnClick = () => {
        scroll.scrollToTop();
        this.callChangeEmployerData("newAccount", false);
        this.callChangeLogInStatus("newAccount", true);
        this.callChangeProfessionalData("activeTab", 0);
        // this.callChangeFresherData("activeTab", 0);//don't delete this, need to figure out why this gives errors
    }

    handleLogout = () => {
        handleLogout().then(() => {
            alert("successfully logged out")
            this.callChangeLogInStatus("loggedIn", false);
            this.callChangeLogInStatus("showEmployee", false);
            // this.callChangeFresherData("activeTab", 0);//don't delete this, need to figure out why this gives errors
            this.callChangeProfessionalData("activeTab", 0);
        });

    };

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                return (this.callChangeLogInStatus("loggedIn", true)
                //  ,this.callChangeLogInStatus("showEmployee", true)
                 )
            }
            else
                return this.callChangeLogInStatus("loggedIn", false)

        });
    }
 
    componentDidMount() {
        this.authListener(); 
    }


    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top" id="NavHeader" className="my-nav" >
                <Link to="/">
                <Navbar.Brand href=""
                    className="logos"
                    style={{ fontWeight: "bolder", color: "orange" }}
                    onClick={() => this.handleLogoOnClick()}>
                    <img src={logo} className="logos" />
                    OplaGo
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger" onClick={(e) => e.preventDefault()} />
                <Navbar.Collapse id="basic-navbar-nav" className='new'>
                    <Nav className="mr-auto">
                        {
                            this.props.header.showEmployee ?'':
                                <Link to="/employer" className="vag" id="nav-main"
                                    style={{ fontWeight: "bolder" }}
                                    onClick={()=>this.callChangeEmployerData("newAccount", true)}
                                >
                                    Recruiter
                                </Link> }
                        {
                            this.props.header.loggedIn ?
                                <Link to="/" smooth={true} duration={1000} className="vag" ><div onClick={() => this.handleLogout()}>Logout</div></Link> :
                                <ScrollLink smooth={true} duration={1000} to="3" className="vag" onClick={(e) => {
                                    this.handleSignInOnClick()
                                }}>Sign-in</ScrollLink>
                        }

                        <Link to="/contact" className="vag">
                            About Us
                        </Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        header: state.header,
        fresherSignUp: state.fresherSignUp,
        professionalSignUp: state.professionalSignUp, 
        employerSignUp: state.employerSignUp,
    }
}

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
        changeFresherData: (fresherSignUp) => {
            dispatch({
                type: "CHANGE_FRESHER_SIGNUP_DATA",
                fresherSignUp: fresherSignUp,
            });
        },
        changeEmployerData: (employerSignUp) => {
            dispatch({
                type: "CHANGE_EMPLOYER_SIGNUP_DATA",
                employerSignUp: employerSignUp,
            });
        },
        changeScrollId: (scrollId) => {
            dispatch({
                type: "CHANGE_SCROLL_ID",
                scrollId: scrollId,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(header)