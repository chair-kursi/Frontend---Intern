import React, { Component } from 'react'
// import List from './components/employee/list'
import List from './list.js';
import { connect } from "react-redux";
import Employeeprofile from './employeeProfile.js';
import '../../css/landing.css';
import { Layout } from "antd";

const topics = ["First topic", "Second topic", "Third topic"]

export class employeeLandingPage extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contentIndex: 0,
  //     selectedKey: "0"
  //   };
  // }
  // changeSelectedKey = (event) => {
  //   const key = event.key;
  //   setSelectedKey(key);
  //   setContentIndex(+key);
  // };


    render() {
      // const Menu = (
      //   <TopicMenu
      //     topics={topics}
      //     selectedKey={selectedKey}
      //     changeSelectedKey={changeSelectedKey}
      //   />

      
      // );
        return (
            <div id="employee-landing" >
               <List />
               <Employeeprofile />
    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
      professionalSignUp: state.professionalSignUp, 
      fresherSignUp: state.fresherSignUp
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
       
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(employeeLandingPage);