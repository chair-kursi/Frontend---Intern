import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { doResetPassword } from '../auth/firebase';
import { emailValid } from "../validator/formValidator";


export class resetPassword extends Component {
    constructor() {
        super();
        this.state = {
            errorMessage: '',
            successMessage:'',
            email: ''
        };
    }

    resetPassword = () => {
        doResetPassword(this.state.email)  
        .then( ()=> {
            this.setState({errorMessage: "Please check your email..."})  
        }).catch( (e)=> {
            this.setState({errorMessage: e.message})
        })  
    } 

render() {
    return (
        <div>
            <div className="resetNow">
                <p>{this.state.errorMessage}</p>
                <p>{this.state.successMessage}</p>
                <input
                    style={{ margin: "25px", padding: "3px" }}
                    type="email"
                    id="resetEmail"
                    placeholder="Enter Email"
                    onChange={(e) => {
                        this.setState({
                            errorMessage: emailValid(e.target.value),
                            email: e.target.value
                        });
                    }}
                />
                <Button
                    variant="primary"
                    id="fr-but"
                    className="bton2"
                    onClick={() => this.resetPassword()}
                >
                    submit
                </Button>


            </div>
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return {
        fresherSignUp: state.fresherSignUp,
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(resetPassword);
