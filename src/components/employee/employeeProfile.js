import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/variables.css';
import '../../css/employeeProfile.css';
import { PulseLoader } from "react-spinners"
import { Layout } from "antd";
// import { Drawer, Button } from 'antd';
// import { Dropdown,DropdownButton } from 'react-bootstrap';
import { Progress, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

// import React, { Component } from "react";


export class Employeeprofile extends Component {
    state = {
        percent: 69,
        isActive: true,
    };

    // constructor() {
    //     super();
    //     this.state = {

    //     };
    //   }

    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    };

    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    };

    // document.querySelector('.nav-toggle').onclick = function (e) {
    //     var nav = document.querySelector('#products');
    //     nav.classList.toggle('collapse');
    //     e.preventDefault();
    //   }




    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };

    render() {
        const isActive = this.state.isActive;
        // const SideBar = ({ menu }) => {
        return (
            <div className="cont">
                <div className="navbars navbar-expand-lgs">

                

                    {/* <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="dd" id="navbarText">
                        <ul className="navbar-nav animate side-nav">


                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Cart"><i className="far fa-user-circle shortmenu animate"></i>
                                    <div className="sn">
                                        <div className="profile-userpic">
                                            <img src="data:image/jpeg;base64,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" className="img-responsive" alt="" />
                                            <div className="profile-usertitle">
                                                <div className="profile-usertitle-name">
                                                    Vagisha Kumar
                                                </div>
                                                <div className="profile-usertitle-job">
                                                    React Developer
                                                </div>
                                                
                                            </div>

                                        </div>
                                        <Progress percent={this.state.percent} />
                                        {/* <Button.Group>
                                           <Button onClick={this.decline} icon={<MinusOutlined />} />
                                            <Button onClick={this.increase} icon={<PlusOutlined />} />
                                             </Button.Group> */}


                                        <div className="collapsed drop" data-toggle="collapse" data-target="#products">
                                            {/* <a href="#" className="nav-toggle" onClick={this.handleToggle}> Details <i className="fas fa-chevron-down"></i><span className="arrow"></span></a> */}
                                            <a href="#" className="nav-toggle" onClick={this.handleToggle}><i className={isActive ? "fas fa-chevron-down " : "fas fa-chevron-down rtoate180" }></i><span className="arrow"></span></a>
                                         
                                            <ul className={isActive ? "collapse" : null} id="products">

                                                {/* <li><a href="#">Personal Details</a></li> <br />
                                                <li><a href="#">Professional Details</a></li><br />
                                                <li><a href="#">Education Details</a></li><br />
                                                <li><a href="#">Resume Attached</a></li><br />
                                                <li><a href="#">Follow Keywords</a></li><br />
                                                <li><a href="#">Recommendations</a></li><br />
                                                <li><a href="#">Profile Picture</a></li><br /> */}
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item">
                                                            <a href="https://www.iimjobs.com/registration/registration.php?profiletype=1" >Personal Details</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item" ><a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&p" >Professional Details</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&e" >Education Details</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&u" >Resume Attached</a>
                                                            <span className="optlipending"><i class="fas fa-times"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/meta/" >Follow Keywords</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&r" >Recommendations</a>
                                                            <span className="optlipending"><i class="fas fa-times"></i></span>                                </p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/registration/registration.php?profiletype=1&u" >Profile Picture</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/myprofile" >Linkedin Connection</a>
                                                            <span className="optlipending"><i class="fas fa-times"></i></span>                                </p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/myprofile" >Facebook Connection</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/myprofile" >Twitter Connection</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/verification" target="_blank" >Email Verification</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/verification" target="_blank" >Phone Verification</a>
                                                            <span className="optlipending"><i class="fas fa-times"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/registration/roundzero.php?ref=profilestatus" >Video/Audio Profile</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="newprofwidgetsectloptli">
                                                        <p className="info-item"><a href="https://www.iimjobs.com/registration/skillsAndRecommendation.php?profiletype=1&r" >Skills</a>
                                                            <span className="optlidone"><i class="fas fa-check"></i></span>                                </p>
                                                    </div>
                                                </li>



                                                {/* <li className="nav-item">
                                <a className="nav-link" href="#" title="Dashboard"><i className="fas fa-cube shortmenu animate"></i>
                                    <div className="some">Dashboard</div>

                                </a>

                            

                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Comment"><i className="fas fa-comment shortmenu animate"></i>
                                    <div className="some">Comment</div>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-envelope-open shortmenu animate"></i>
                                    <div className="some">Messages</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-briefcase shortmenu animate"></i>
                                    <div className="some">
                                        Manage Jobs
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-rocket shortmenu animate"></i>
                                    <div className="some">Earnings</div>
                                </a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-lock shortmenu animate"></i>
                                <div className="some">Change Password</div>
                            </a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-power-off shortmenu animate"></i>
                                <div className="some">LogOut</div>
                            </a>
                            </li>  */}

                                            </ul>
                                          
                                        </div>

                                    </div>
                                </a>
                            </li>
                            </ul>


                            <ul className="navbar-nav animate side-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Dashboard"><i className="fas fa-cube shortmenu animate"></i>
                                    <div className="some">Dashboard</div>

                                </a>

                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Comment"><i className="fas fa-comment shortmenu animate"></i>
                                    <div className="some">Comment</div>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-envelope-open shortmenu animate"></i>
                                    <div className="some">Messages</div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-briefcase shortmenu animate"></i>
                                    <div className="some">
                                        Manage Jobs
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-rocket shortmenu animate"></i>
                                    <div className="some">Earnings</div>
                                </a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-lock shortmenu animate"></i>
                                <div className="some">Change Password</div>
                            </a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-power-off shortmenu animate"></i>
                                <div className="some">LogOut</div>
                            </a>
                            </li>

                        </ul>
                        {/* <ul className="navbar-nav ml-md-auto d-md-flex">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-user"></i> Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-key"></i> Logout</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        );
    };
    // }
}





export default Employeeprofile
