import React, { Component } from 'react'
import Form from "./form.js"
import Profile from "../employee/employeeProfile.js"


export class employerLandingPage extends Component {
    render() {
        return (
            <div>
                {
                    this.props.header.loggedIn?
                    <List/>:
                    this.props.employerSignUp.newAccount?
                    <SignUp/>:
                    <Login/>
                } 
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        header: state.header,
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
        }
    };
};

export default employerLandingPage
