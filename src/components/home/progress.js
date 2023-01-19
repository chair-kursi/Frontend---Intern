import React, { Component } from 'react'
import '../../css/variables.css';
import { connect } from "react-redux";
import '../../css/progress.css';


export class progress extends Component {
  

    render() {
        return (
            <div className="containers">
                <div className="progress-bar-container"> 
                    <div className="circles-container">
                        <div className={`circle ${ (this.props.fresherSignUp.activeTab === 1 ||  this.props.fresherSignUp.activeTab === 1) ? "active": ""}`} >{/* className={`box ${isBoxVisible ? "" : "hidden"}`}*/}
                            <h3>Personal</h3>
                        </div>
                        <div className={`circle ${ (this.props.fresherSignUp.activeTab === 2 || this.props.fresherSignUp.activeTab===2) ? "active": ""}`}>
                            <h3>Educational</h3>
                        </div>
                    </div> 
                </div>
                
                <br />
                {/* <div className="form-groups">
                    <button className="btns" id="prev" disabled>Preview</button>
                    <button className="btns" id="next">Next</button>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      fresherSignUp: state.fresherSignUp,
      professionalSignUp: state.professionalSignUp,
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(progress);