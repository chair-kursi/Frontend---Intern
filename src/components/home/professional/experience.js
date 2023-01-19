import React, { Component } from 'react'
import Select from 'react-select';
// import { emailValid, textValid, mobileValid, passwrodValid, } from "../../validator/formValidator";

// import { Upload, message, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
import "../../../css/experience.css";
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import { ScaleLoader } from "react-spinners";
import { connect } from 'react-redux';
import { textValid } from '../../validator/formValidator';
import { getByDisplayValue } from '@testing-library/react';
import {getCities,  getNoticePeriod,getSkills,getWorkingSinceMonths,getWorkingSinceYears,getWorkingTill,getCompanies, getSalaryInLakhs, getCurrentDesignation} from '../../service/metaDataService' 


 
export class experience extends Component {

  constructor() {
    super();
    this.state = {
      highestDegree: '',
      course: '',
      cities: '',
      errors: {
        currentDesignationError: '',
        currentOrganisationError:''
      }, 
      selectedSkills: [],
      noticePeriods: '',
      skills:'',
      workingSinceYears: '',
      workingSinceMonths: '',
      workingTill:'',
      companies: '',
      lakhs:'',
      thousands:''
    }
  }
 
 

  callChangeAccountStatus = (key, value) => {
    let sendData = {
      ...this.props.professionalSignUp,
      [key]: value,
    }
    this.props.changeAccountStatus(sendData);
  }

  callUpdateWorkExperience = (key, value) => {
    let sendData = {
      ...this.props.workExperience,
      [key]: value,
    }
    this.props.updateWorkExperience(sendData);
  }

  callUpdateWorkExperience2 = (parent, key, value) => {
    let sendData = {
      ...this.props.workExperience,
      [parent]:{
        ...this.props.workExperience[parent],
        [key]: value
      }
    }
    this.props.updateWorkExperience(sendData);
  } 
  handleSkills = selectedSkills => {
    this.setState({selectedSkills})
  };

  isValidExperience = () => {
    const skills = this.state.selectedSkills.map((skill)=>({
        "label": skill.label,
        "value": skill.value
    }))
    this.callUpdateWorkExperience("skills", skills);
    // if(!this.props.professionalSignUp.currentDesignation || !this.props.professionalSignUp.currentOrganisation || !this.props.professionalSignUp.lakhs || !this.props.professionalSignUp.currentDesignation)

  }
 
  componentDidMount(){ 
    this.setState({
      cities: getCities(this.props.metaData.metaData.cities),
      noticePeriods: getNoticePeriod(this.props.metaData.metaData.noticePeriods),
      skills:getSkills(this.props.metaData.metaData.skills),
      workingSinceMonths:getWorkingSinceMonths(this.props.metaData.metaData.workingSince.months),
      workingSinceYears:getWorkingSinceYears(this.props.metaData.metaData.workingSince.years),
      workingTill:getWorkingTill(this.props.metaData.metaData.workingSince.to),
      companies:getCompanies(this.props.metaData.metaData.companies),
      lakhs: getSalaryInLakhs(this.props.metaData.metaData.salaries.lakhs),
      thousands: getSalaryInLakhs(this.props.metaData.metaData.salaries.thousands),
      currentDesignation: getCurrentDesignation(this.props.metaData.metaData.designations)
    })
    
  }

  render() {
    return (
      <div> 
        <div className="ex-form">
          <form id="my-for">

            <div className="l">
              {/* <div className="num row">
                <label className="lab col-sm-10 col-lg-4"> Current Designation <span className="req"> *</span>: </label>
                <input className="in col-sm-10 col-lg-8" autoComplete="off" type="text" id="currentDesignation" placeholder="Enter Your Designation"
                  onChange={(e) => this.callUpdateWorkExperience(e.target.id, e.target.value)}
                />
              </div>  */}
              <div className="num row">
                <label className="lab col-sm-10 col-lg-4"> Current Designation<span className="req"> *</span>: </label>
                <Select
                  id="currentDesignation"
                  options={this.state.currentDesignation}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-8"
                  onChange={(e) => this.callUpdateWorkExperience("currentDesignation", e.label)}
                />
              </div>
              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-4"> Current Organization <span className="req"> *</span>: </label>
                <input className="in col-sm-10 col-lg-8" autoComplete="off" type="text" id="currentOrganisation" onChange={(e) => this.callUpdateWorkExperience(e.target.id, e.target.value)} placeholder="Enter Your Organization" />
              </div>
              <span className="err">{this.state.errors.currentOrganisationError?"Invalid Organization":''}</span>
              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-4"> Annual Salary<span className="req"> *</span>: </label>
                <div className="col-sm-10 col-lg-8">
                <ToggleButtonGroup type="radio" name="options" className="full">
                  <ToggleButton value={1} variant="outline-primary">₹</ToggleButton>
                  <ToggleButton value={2} variant="outline-primary">$</ToggleButton>
                </ToggleButtonGroup>
                <Select
                  id="lakhs"
                  options={this.state.lakhs}
                  autoComplete="off"
                  className="sal"
                  placeholder="Lakhs"
                  menuPlacement="auto"
                  maxMenuHeight={100}
                  onChange={(e)=>  this.callUpdateWorkExperience2("annualSalary", "lakhs", e.label)}
                />
                <Select
                  id="thousands"
                  options={this.state.thousands}
                  autoComplete="off"
                  className="sal"
                  placeholder="Thousands"
                  menuPlacement="auto"
                  maxMenuHeight={100}
                  onChange={(e)=>  this.callUpdateWorkExperience2("annualSalary", "thousands", e.label)}
                />
                </div>
                
              </div>

              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-4">Working since<span className="req"> *</span>: </label>
                <div className="col-sm-10 col-lg-8">
                <Select
                  id="year"
                  options={this.state.workingSinceYears}
                  autoComplete="off"
                  className="dur"
                  placeholder="Year"
                  menuPlacement="auto"
                  maxMenuHeight={100}                  
                  onChange={(e)=>  this.callUpdateWorkExperience2("workingSince", "year", e.label)}
                />
                <Select
                  id="month"
                  options={this.state.workingSinceMonths}
                  autoComplete="off"
                  className="dur"
                  placeholder="Month"
                  menuPlacement="auto"
                  maxMenuHeight={100}
                  onChange={(e)=>  this.callUpdateWorkExperience2("workingSince", "month", e.label)}
                />
                to
                <Select
                  id="present"
                  options={this.state.workingTill}
                  autoComplete="off"
                  className="dur"
                  placeholder="Present"
                  menuPlacement="auto"
                  maxMenuHeight={100}
                  onChange={(e)=>  this.callUpdateWorkExperience2("workingSince", "present", e.label)} 
                />
                </div>
                
              </div>
              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-4"> Current City<span className="req"> *</span>: </label>
                <Select
                  id="currentCity"
                  options={this.state.cities}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-8"
                  onChange={(e) => this.callUpdateWorkExperience("currentCity", e.label)}
                />
              </div>

              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-4">Notice Period<span className="req"> *</span>: </label>

                <Select
                  id="noticePeriod"
                  options={this.state.noticePeriods}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-8"
                  placeholder="Duration in months"
                  menuPlacement="auto"
                  maxMenuHeight={100}
                  onChange={(e) => this.callUpdateWorkExperience("noticePeriod", e.label)}
                />

              </div>


              <br />
              <div className="num row">
                <label className="lab col-sm-10 col-lg-4">Skills<span className="req"> *</span>: </label>

                <Select
                  isMulti
                  id="skills"
                  name="colors"
                  options={this.state.skills}
                  className="basic-multi-select inp col-sm-10 col-lg-8"
                  placeholder="Select Your Skills"
                  classNamePrefix="Enter our area of specialization/expertise"
                  onChange={this.handleSkills}
                />
              </div>



              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-4">Company Industry<span className="req"> *</span>: </label>

                <Select
                  id="companyIndustry"
                  options={this.state.companies}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-8"
                  placeholder=" Select Industry"
                  menuPlacement="auto"
                  maxMenuHeight={100}
                  onChange={(e) => this.callUpdateWorkExperience("companyIndustry", e.label)}
                />

              </div>
              <br />


              <div className="num row">
                <label className="lab col-sm-10 col-lg-4">Functional Area<span className="req"> *</span>: </label>

                <Select
                  id="functionalArea"
                  options={this.state.highestDegree}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-8"
                  placeholder="Select"
                  menuPlacement="auto"
                  maxMenuHeight={100}
                  onChange={(e) => this.callUpdateWorkExperience("functionalArea", e.label)}
                />

              </div>
              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-4">Role<span className="req"> *</span>: </label>

                <Select
                  id="role"
                  options={this.state.highestDegree}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-8"
                  placeholder="Your Role"
                  menuPlacement="auto"
                  maxMenuHeight={100}
                  onChange={(e) => this.callUpdateWorkExperience("role", e.label)}
                />

              </div>
              <br />
            </div>

            <div className="but-d">
              <button className="but"
                onClick={(e) => {
                  e.preventDefault(); 
                  this.isValidExperience();
                  this.callChangeAccountStatus("activeTab", this.props.professionalSignUp.activeTab + 1)
                }

                }
              > Continue </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    header: state.header,
    professionalSignUp: state.professionalSignUp,
    workExperience: state.workExperience,
    metaData: state.metaData
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
    changeAccountStatus: (professionalSignUp) => {
      dispatch({
        type: "CHANGE_PROFESSIONAL_SIGNUP_DATA",
        professionalSignUp: professionalSignUp
      })
    },
    updateWorkExperience: (workExperience) => {
      dispatch({
        type: "CHANGE_EXPERIENCE_DATA",
        workExperience: workExperience
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(experience)