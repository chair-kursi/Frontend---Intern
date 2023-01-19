import React, { Component } from 'react'
import Select from 'react-select';
// import { emailValid, textValid, mobileValid, passwrodValid, } from "../../validator/formValidator";
// import Progress from '../progress';
// import { Upload, message, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import PhoneInput from 'react-phone-input-2';
import "../../../css/login.css";
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import {getHighestDegrees,  getCourses, getSpecializations, getColleges, getPassingYear} from '../../service/metaDataService'



export class educational extends Component {

  constructor() {
    super();
    this.state = {
      highestDegrees: '',
      courses: '',
      specializations:'',
      colleges:'',
      passingYears:''
    }
  } 

  callChangeFormData = (key, value) => {
    let sendData = {
      ...this.props.professionalSignUp,
      [key]: value,
    }
    this.props.changeFormData(sendData);
  }
  
  componentDidMount(){
    this.setState({
      highestDegrees: getHighestDegrees(this.props.metaData.metaData.degrees),
      courses: getCourses(this.props.metaData.metaData.courses.Master),
      specializations: getSpecializations(this.props.metaData.metaData.specializations),
      colleges: getColleges(this.props.metaData.metaData.colleges),
      passingYears: getPassingYear(this.props.metaData.metaData.passingYear)
    })
    
  }


  render() {
    return (
      <div>
        <div>
          <form id="my-form">
            <div className="write">
              <div className="num row">

                <label className="lab col-sm-10 col-lg-5">Highest Qualifications<span className="req"> *</span>: </label>
                <Select
                  id="highestQualification"
                  options={this.state.highestDegrees}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-7"
                  placeholder="Select"
                  onChange={(e) => this.callChangeFormData("highestQualification", e.label)}
                />
              </div>
              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-5"> Course<span className="req"> *</span>: </label>
                <Select
                  id="course"
                  options={this.state.courses}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-7"
                  placeholder="Select Your Course"
                  onChange={(e) => this.callChangeFormData("course", e.label)}
                />

              </div>

              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-5"> Specialization<span className="req"> *</span>: </label>

                <Select
                  id="specialization"
                  options={this.state.specializations}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-7"
                  placeholder="Select Specialization"
                  onChange={(e) => this.callChangeFormData("specialization", e.label)}
                />

              </div>

              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-5"> University/College<span className="req"> *</span>: </label>

                <Select
                  id="institution"
                  options={this.state.colleges}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-7"
                  placeholder="Institute Name"
                  onChange={(e) => this.callChangeFormData("institution", e.label)}
                />

              </div>


              <br />

              <div className="num">
                <label className="lab"> Course Type<span className="req"> *</span>: </label>
                <ToggleButtonGroup type="radio" name="options" className="full inp" 
                  onChange={(e)=>
                  {
                    let value;
                    if(e === 1)
                    value = "Full Time";
                    else if(e===2) value = "Part Time";
                    else value = "Correspondence";
                    this.callChangeFormData("courseType", value)}}
                >
                  <ToggleButton value={1} variant="outline-primary">Full Time</ToggleButton>
                  <ToggleButton value={2} variant="outline-primary">Part Time</ToggleButton>
                  <ToggleButton value={3} variant="outline-primary">Correspondence</ToggleButton>
                </ToggleButtonGroup>
                </div>
              </div>

              <br />

              <div className="num row">
                <label className="lab col-sm-10 col-lg-5"> Passing Year<span className="req"> *</span>: </label>

                <Select
                  id="passingYear"
                  options={this.state.passingYears}
                  autoComplete="off"
                  className="inp col-sm-10 col-lg-7"
                  placeholder="Select passing year"
                  onChange={(e) => this.callChangeFormData("passingYear", e.label)}
                />

              </div>
              <br />

              {/* <div className="num">
                <label className="lab">Skills<span className="req"> *</span>: </label>

                <Select
                  isMulti
                  name="colors"
                  options={this.state.highestDegree}
                  className="basic-multi-select inp col-sm-10 col-lg-7"
                  placeholder="Select Your Skills"
                  classNamePrefix="Enter our area of specialization/expertise"
                  onChange={(e) => console.log("Skills: ", e)}
                // onChange={(e)=>this.callChangeFormData("highestQualification", e.label)}
                />
              </div>
              <br /> */}

              <Link to="/employee"><button className="but" > Continue </button></Link> 

          </form>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    professionalSignUp: state.professionalSignUp,
    metaData: state.metaData 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormData: (professionalSignUp) => {
      dispatch({
        type: "CHANGE_PROFESSIONAL_SIGNUP_DATA",
        professionalSignUp: professionalSignUp,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(educational);