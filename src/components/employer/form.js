import React, { Component } from 'react'
import Profile from "../employee/employeeProfile.js"
import "../../css/form.css"
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export class form extends Component {
   render() {
      return (
         <div className="container">
            <div id="" className="row">
               <div className="col-md-12 col-lg-10 post-form">
                  <div className="dashboard-right">
                     <div className="earnings-page-box manage-jobs">
                        <div className="manage-jobs-heading">
                           <h3>Post A new job</h3>
                        </div>
                        <div className="new-job-submission">
                           <form>
                              <div className="resume-box">
                                 <div className="single-resume-feild feild-flex-2">
                                    <div className="single-input">
                                       <label for="j_title">Job Title:</label>
                                       <input type="text" id="j_title" />
                                    </div>
                                    <div className="single-input">
                                       <label for="Location">Location:</label>
                                       <input type="text" placeholder="e.g. Delhi" id="Location" />
                                    </div>
                                 </div>
                                 <div className="single-resume-feild feild-flex-2">
                                    <div className="single-input">
                                       <label for="j_reg">Job Region:</label>
                                       <select id="j_reg">
                                          <option value=''>Select Region</option>
                                          <option value="1">Delhi</option>
                                          <option value="2">Gujarat</option>
                                          <option value="3">Rajasthan</option>
                                          <option value="4">Madhya Pradesh</option>
                                       </select>
                                    </div>
                                    <div className="single-input">
                                       <label for="j_type">Job Type:</label>
                                       <select id="j_type">
                                          <option value=''>Select Type</option>
                                          <option value="1">Full TIme</option>
                                          <option value="2">Freelance</option>
                                          <option value="3">Part Time</option>
                                          <option value="4">Internship</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="single-resume-feild feild-flex-2">
                                    <div className="single-input">
                                       <label for="j_category">Job Category:</label>
                                       <select id="j_category">
                                          <option value="122">Accounting / Finance</option>
                                          <option value="124">Automotive Jobs</option>
                                          <option value="132">Construction / Facilities</option>
                                          <option value="137">Design, Art & Multimedia</option>
                                          <option value="172">Adobe Photoshop</option>
                                          <option value="173">Animation</option>
                                          <option value="145">Graphic Design</option>
                                          <option value="147">Illustration</option>
                                          <option value="150">Logo Design</option>
                                          <option value="168">Video</option>
                                          <option value="140">Education Training</option>
                                          <option value="146">Healthcare</option>
                                          <option value="157">Restaurant / Food Service</option>
                                          <option value="159">Sales / Marketing</option>
                                          <option value="175">Display Advertising</option>
                                          <option value="176">Email Marketing</option>
                                          <option value="177">Lead Generation</option>
                                          <option value="179">Marketing Strategy</option>
                                          <option value="180">Public Relations</option>
                                          <option value="165">Telecommunications</option>
                                          <option value="167">Transportation / Logistics</option>
                                       </select>
                                    </div>
                                    <div className="single-input">
                                       <label for="External">External "Apply for Job" link : </label>
                                       <input type="text" placeholder="http://" id="External" />
                                    </div>
                                 </div>
                                 <div className="single-resume-feild feild-flex-2">
                                    <div className="single-input">
                                       <label for="mn_salary">Minimum Salary (₹):</label>
                                       <input type="text" placeholder="e.g. 20000" id="mn_salary" />
                                    </div>
                                    <div className="single-input">
                                       <label for="mx_salary">Maximum Salary (₹):</label>
                                       <input type="text" placeholder="e.g. 50000" id="mx_salary" />
                                    </div>
                                 </div>
                                 <div className="single-resume-feild">
                                    <div className="single-input">
                                       <label for="j_desc">Job Description:</label>
                                       <textarea id="j_desc"></textarea>
                                    </div>
                                 </div>
                                 <div className="single-resume-feild upload_file">
                                    <Upload>
                                       <div className="">
                                          <Button icon={<UploadOutlined />}>Upload Files</Button>
                                       </div>
                                    </Upload>
                                    <p>Images or documents that might be helpful in describing your job</p>
                                 </div>
                              </div>
                              <div className="single-input submit-resume">
                                 <button type="submit">Post Job</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      )
   }
}

export default form
