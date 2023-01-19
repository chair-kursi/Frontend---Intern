import React, { Component } from "react"; 
import Banner from "../common/Banner";
import { connect } from "react-redux"; 
import FresherSignUp from "./fresherSignUp"; 
import ProfessionalSignUp from "./professionalSignUp"; 
import EmployeeSignUp from "../employee/employeeLandingPage";
import MarketingPage from "./marketingPage"; 
import "../../css/variables.css";
import "../../css/header.css";  
import Login from './login'
import { getMetaData } from "../service/metaDataService" 

export class homepage extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
    };
  }
  callChangeLogInStatus = (key) => {
    let sendData = {
      ...this.props.header,
      [key]: true,
    };
    this.props.changeLogInStatus(sendData);
  };

  callSetMetaData = (response) => {
    let sendData = { 
      metaData: response
    };
    this.props.setMetaData(sendData);
  }
  

  componentDidMount(){
    getMetaData().then((response)=> this.callSetMetaData(response.data.body)).catch((err)=> console.log(err))
    // this.callSetMetaData(meta_data);
  }

  render() {
    return (
      <div> 
        { 
          !this.props.header.showEmployee?
          <>
            <Banner />
            <div id={`${this.props.scrollId}`}>
            {
              !this.props.header.newAccount?
              <Login/>:
              this.props.fresherSignUp.activeTab?
              <FresherSignUp /> :
              this.props.professionalSignUp.activeTab?
              <ProfessionalSignUp/>:""
              
            }
            </div>
            
            <MarketingPage />  
          </>:
          <EmployeeSignUp/>
       } 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fresherSignUp: state.fresherSignUp,
    header: state.header,
    scrollId: state.scrollId, 
    professionalSignUp: state.professionalSignUp
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLogInStatus: (header) => {
      dispatch({
        type: "USER_DID_LOG_IN",
        header: header,
      });
    },
    setMetaData: (metaData) => {
      dispatch({
          type: "STORE_META_DATA",
          metaData: metaData
      })
  }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(homepage);
