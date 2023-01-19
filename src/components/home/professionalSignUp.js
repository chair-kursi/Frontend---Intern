import React, { Component } from 'react';
import Experience from "./professional/experience";
import Educational from "./professional/educational";
import { connect } from 'react-redux';
import Personal from './professional/personal';
// import Login from './login'

class professionalSignUp extends Component {

    callChangeProfessionalFormData = (key, value) => {
        let sendData = {
          ...this.props.professionalSignUp,
          [key]: value,
        }
        this.props.changeProfessionalFormData(sendData);
      }

    render() {
        return(
            <div>    
                {
                    this.props.professionalSignUp.activeTab   && this.props.header.newAccount?
                    <>
                        <div className="progress-bar-containers" > 
                            <div className="circles-containers">
                                <div className={`circles ${ (this.props.professionalSignUp.activeTab === 1) ? "active": ""}`} >{/* className={`box ${isBoxVisible ? "" : "hidden"}`}*/}
                                    <h3>Personal</h3>
                                </div>
                                <div className={`circles ${ (this.props.professionalSignUp.activeTab === 2) ? "active": ""}`} >{/* className={`box ${isBoxVisible ? "" : "hidden"}`}*/}
                                    <h3>Work Experience</h3>
                                </div>
                                <div className={`circles ${ (this.props.professionalSignUp.activeTab === 3) ? "active": ""}`}>
                                    <h3>Educational</h3>
                                </div>
                            </div> 
                            <p className="crosss" onClick={()=>this.callChangeProfessionalFormData("activeTab", 0)}> <i class="fas fa-times-circle fa-2x"></i> </p>
                        </div>
                        
                    </>:''
                }
                { 
                    this.props.professionalSignUp.activeTab==1?
                    <Personal />:  
                    this.props.professionalSignUp.activeTab==2?
                    <Experience/>:                     
                    this.props.professionalSignUp.activeTab===3? 
                    <Educational />: ""
                }
             </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        professionalSignUp: state.professionalSignUp,
        newAccount: state.newAccount,
        header: state.header
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        changeProfessionalFormData: (professionalSignUp) => {
            dispatch({
                type: "CHANGE_PROFESSIONAL_SIGNUP_DATA",
                professionalSignUp: professionalSignUp,
            });
        }, 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(professionalSignUp) 