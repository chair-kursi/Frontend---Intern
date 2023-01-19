import React, { Component } from 'react'
import { connect } from 'react-redux';
import "../../css/variables.css";
import { emailValid, textValid, mobileValid, passwrodValid, } from "../validator/formValidator";
import { ScaleLoader } from "react-spinners"
// import { Link } from 'react-router-dom';
import { getLogin } from '../auth/firebase'
import { Link, animateScroll as scroll, } from 'react-scroll'


const errorElements = {
  emailError: '',
  passwordError: ''
}

export class login extends Component {

  constructor() {
    super();
    this.state = {
      errorMessage: '',
      errors: errorElements,
      emailId: '',
      password: '',
      showLoader: false,
      loginDirection: '', 
    };
    this.emailRef = React.createRef();
  }

  callChangeLogInStatus = (key, value) => {
    let sendData = {
      ...this.props.header,
      [key]: value
    }
    this.props.changeLogInStatus(sendData);
  }

  handleLogin = () => {
    this.setState({ errorMessage: '' })//clearing errors
    getLogin(
      this.state.emailId,
      this.state.password
    )
      .then(() => { 
        this.callChangeLogInStatus("loggedIn", true);
        this.callChangeLogInStatus("newAccount", true);
        this.callChangeLogInStatus("showEmployee", true);
        this.setState({
          showLoader: false,
          loginDirection: 'employee', 
        })
      })
      .catch((error) =>{
        this.setState({
          showLoader: false,
          loginDirection: 'employee'
        })
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') { 
            this.setState({errorMessage:"Wrong Password"})
        } else { 
          this.setState({errorMessage: errorMessage}) 
        }
        console.log(error);
      });
  }

  handleOnClick = (e) => {
    e.preventDefault();

    if (this.state.errors.emailError || this.state.errors.mobileError || this.state.errors.nameError || this.state.errors.passwordError) {
      //Don't do anything, as error is already displaying
    }
    else if(!this.state.password || !this.state.emailId)
    this.setState({ errorMessage: "Please fill all the required (*) fields" });

    else if (this.state.emailId && this.state.password) {
      this.setState({
        showLoader: true, 
      })
      this.handleLogin();
    } 
  };

  componentDidMount(){
    this.emailRef.current.focus()
    console.log("meta_dataaa: ", this.props.metaData)
  }

  render() {
    return (
      <div className="log-sec">
        <div className="log-form">
        <div className="log-part">
        <h2>Login</h2>
          <p className="cross" onClick={() => this.callChangeLogInStatus("newAccount", true)}> <i class="fas fa-times-circle fa-2x"></i> </p>
          <p>{this.state.errorMessage}</p>
          
          <div className="num row">
            <label className="lab col-sm-10 col-lg-3"> Email<span className="req"> *</span>: </label>
            <input className="in col-sm-9 col-lg-9" ref={this.emailRef} type="text" autoComplete="off" placeholder="Enter Your Email Address" id="emailId" onChange={(e) => {
              this.setState({
                errors: {
                  ...this.state.errors,
                  emailError: emailValid(e.target.value),
                },
                emailId: e.target.value
              });
            }} />
          </div>
          <span class="error">{this.state.errors.emailError}</span>

          <br />

          <div className="num row">
            <label className="lab col-sm-10 col-lg-3"> Password<span className="req"> *</span>: </label>
            <input className="in col-sm-9 col-lg-9" type="password" id="password" placeholder="Create a Password" onChange={(e) => {
              this.setState({
                errors: {
                  ...this.state.errors,
                  passwordError: passwrodValid(e.target.value),
                },
                password: e.target.value
              });
            }} />
          </div>
          <span className="error psd">{this.state.errors.passwordError}</span>

          <div className="but-d">
            <button className="but"  onClick={(e)=>{
              this.setState({errorMessage:''})
              this.handleOnClick(e)
            }}> Login   </button>
            {
              this.state.showLoader ?
                <ScaleLoader size={90} color={"#123abc"} loading={this.state.loading} speedMultiplier={1.5} /> : ''
            }
            <p>Forgot Password?  <Link to="/reset" className="reset" >  <strong> Reset Now</strong></Link> </p>
          </div>            
            </div>
          

        </div>
      </div>



    )
  }
}

const mapStateToProps = (state) => {
  return {
    header: state.header,
    metaData: state.metaData
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);