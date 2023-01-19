import React, { Component } from 'react';
import '../../css/footer.css';
import '../../css/variables.css';

const currentDate = new Date();
const year = currentDate.getFullYear();

export class footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="row text-center text-xs-center text-sm-left text-md-left han">
                    <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="dk-footer-box-info">
                        <div className="footer-social-link">
                            <h3>OplaGo</h3>
                            <p>OplaGo is on a mission to make it 
                             dead simple for leading Indian 
                            startups to hire the top 2% of 
                            tech talent.</p>
                            <ul>
                                <li>
                                    <a href="#" title="Our LINKEDIN page">
                                    <i className="fab fa-linkedin-in fa-2x icons-link"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="Our TWITER page">
                                    <i className="fab fa-twitter fa-2x icons-twi"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="mailto:#" title="MAIL us">
                                    <i className="fas fa-envelope fa-2x icons-mail"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="Our INSTAGRAM page">
                                    <i className="fab fa-instagram fa-2x icons-ins"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="Our FACEBOOK page">
                                    <i className="fab fa-facebook fa-2x icons-fb"></i>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-2 main" id="list">
                            <h5>Candidates</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>For Candidates</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Candidates Sign Up</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Invite & Earn ₹15k</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Candidate FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-2 main">
                            <h5>Employers</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>For Employers</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Employer Sign Up</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Employer FAQ</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-2 main">
                            <h5>Company</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Careers</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i>Privacy Policy</a></li>
                            </ul>
                        </div>
                </div>
                    <div style={{color: "white", textAlign: "center"}}>
    <p style={{marginBottom: "0", color: "#8493a2"}}>Copyright © {year}</p>
  </div>
                </footer>


            </div>
        )
    }
}

export default footer
