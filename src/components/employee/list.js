import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
import '../../css/variables.css';
import '../../css/list.css';
import { PulseLoader } from "react-spinners"

export class list extends Component {

    state = {
        items: Array.from({ length: 3 })
    };

    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 3 }))
            });
        }, 1500);
    };


    render() {



        return (
                <section className="jobguru-job-tab-area section_70" style={{ backgroundColor: "F6F6F6" }}>
                    <div className="contain">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="site-heading">
                                    <h2>Recommended  <span>JOBS for you</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {/* <div className=" job-tab">
                                    <ul className="nav nav-pills job-tab-switch" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-companies-tab" data-toggle="pill" href="#pills-companies" role="tab" aria-controls="pills-companies" aria-selected="true">top Companies</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-job-tab" data-toggle="pill" href="#pills-job" role="tab" aria-controls="pills-job" aria-selected="false">job openning</a>
                                        </li>
                                    </ul>
                                </div> */}
                                {/* <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-companies" role="tabpanel" aria-labelledby="pills-companies-tab"> */}
                                <InfiniteScroll
                                    dataLength={this.state.items.length}
                                    next={this.fetchMoreData}
                                    hasMore={true}
                                    loader={<PulseLoader
                                        size={20} color={"#123abc"} loading={this.state.loading} speedMultiplier={1.5} />}
                                >




                                    {this.state.items.map((i, index) => (



                                        <div className="top-company-tab">





                                            <ul className="com-list">
                                            {/* <Link to="/post" className="c-link"> */}
                                                <li>
                                                
                                                    <div className="top-company-list well">
                                                    {/* top-company-list  */}
                                                        <div className="company-list-logo media">
                                                        {/* company-list-logo  */}
                                                            <Link class="pull-left" to="#">
                                                                <img className='media-object' src="https://upload.wikimedia.org/wikipedia/commons/1/17/BYJU%27S_logo.png" alt="company list 1" />
                                                                {/* logo  */}
                                                            </Link>

                                                        </div>
                                                        <div className="media-body">
                                                        {/* company-list-details  */}
                                                            <h4 className="media-heading">Byjus</h4>
                                                            {/* header  */}
                                                                <p className="open-icon"><i className="fa fa-briefcase"></i> Product Manager Ceo Marketing </p>
                                                                {/* open-icon  */}

                                                            <ul  className="list-inline list-unstyled">
                                                            <li><span className="company-state"><i className="fa fa-map-marker"></i> Salary : 4 lacs-5 lacs</span></li>
                                                                <li>|</li>
                                                                <span><i className="fa fa-check"></i> Verified</span>
                                                                <li>|</li>
                                                                <li>
                                                                    <span> Experience : 2-3yrs</span>
                                                                            {/* <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star-empty"></span> */}
                                                                </li>
                                                                <li>|</li>
                                                                <li>
                                                                    <span className="varify "><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</span>
                                                                    {/* <span><i class="fa fa-twitter-square"></i></span>
                                                                    <span><i class="fa fa-google-plus-square"></i></span> */}
                                                                </li>



                                                            </ul>

                                                            {/* <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p>
                                                            <p className="company-state"><i className="fa fa-map-marker"></i>Salary : 4 lacs-5 lacs</p>
                                                            <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                                            <p className="rating-company">4.9</p>
                                                            <p className="varify ">Experience : 2-3yrs</p>
                                                            <p className="varify "><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</p> */}
                                                            
                                                            



                                                        <div className="btone">
                                                        {/* <div className="company-list-btn"> */}
                                                        <Link to="/post" className="jobguru-btn">Apply</Link>
                                                        </div>

                                                        {/* </div> */}
                                                    </div>
                                                     </div>
                                                </li>
                                                {/* </Link> */}


                                                <li>
                                                    <div className="top-company-list  well">
                                                        <div className="company-list-logo media">
                                                            <Link class="pull-left" to="#">
                                                                <img className='media-object' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Asian_Paints_Logo.svg/640px-Asian_Paints_Logo.svg.png" alt="company list 1" />
                                                            </Link>

                                                        </div>
                                                        <div className="media-body">
                                                        {/* company-list-details  */}
                                                            <h4 className="media-heading">Asian Paints</h4>
                                                            {/* header  */}
                                                                <p className="open-icon"><i className="fa fa-briefcase"></i> Product Manager Ceo Marketing </p>
                                                                {/* open-icon  */}

                                                            <ul  className="list-inline list-unstyled">
                                                            <li><span className="company-state"><i className="fa fa-map-marker"></i> Salary : 4 lacs-5 lacs</span></li>
                                                                <li>|</li>
                                                                <span><i className="fa fa-check"></i> Verified</span>
                                                                <li>|</li>
                                                                <li>
                                                                    <span> Experience : 2-3yrs</span>
                                                                            {/* <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star-empty"></span> */}
                                                                </li>
                                                                <li>|</li>
                                                                <li>
                                                                    <span className="varify "><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</span>
                                                                    {/* <span><i class="fa fa-twitter-square"></i></span>
                                                                    <span><i class="fa fa-google-plus-square"></i></span> */}
                                                                </li>



                                                            </ul>

                                                            {/* <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p>
                                                            <p className="company-state"><i className="fa fa-map-marker"></i>Salary : 4 lacs-5 lacs</p>
                                                            <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                                            <p className="rating-company">4.9</p>
                                                            <p className="varify ">Experience : 2-3yrs</p>
                                                            <p className="varify "><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</p> */}
                                                            
                                                            



                                                        <div className="btone">
                                                        {/* <div className="company-list-btn"> */}
                                                        <Link to="/post" className="jobguru-btn">Apply</Link>
                                                        </div>

                                                        {/* </div> */}
                                                    </div>
                                                     </div>
                                                </li>

                                                <li>
                                                    <div className="top-company-list well">
                                                        <div className="company-list-logo media">
                                                            <Link class="pull-left" to="#">
                                                                <img className='media-object' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/GoogleLogoSept12015.png/640px-GoogleLogoSept12015.png" alt="company list 1" />
                                                            </Link>
                                                        </div>
                                                        <div className="media-body">
                                                        {/* company-list-details  */}
                                                            <h4 className="media-heading">Google</h4>
                                                            {/* header  */}
                                                                <p className="open-icon"><i className="fa fa-briefcase"></i> Product Manager Ceo Marketing </p>
                                                                {/* open-icon  */}

                                                            <ul  className="list-inline list-unstyled">
                                                            <li><span className="company-state"><i className="fa fa-map-marker"></i> Salary : 4 lacs-5 lacs</span></li>
                                                                <li>|</li>
                                                                <span><i className="fa fa-check"></i> Verified</span>
                                                                <li>|</li>
                                                                <li>
                                                                    <span> Experience : 2-3yrs</span>
                                                                            {/* <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star-empty"></span> */}
                                                                </li>
                                                                <li>|</li>
                                                                <li>
                                                                    <span className="varify "><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</span>
                                                                    {/* <span><i class="fa fa-twitter-square"></i></span>
                                                                    <span><i class="fa fa-google-plus-square"></i></span> */}
                                                                </li>



                                                            </ul>

                                                            {/* <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p>
                                                            <p className="company-state"><i className="fa fa-map-marker"></i>Salary : 4 lacs-5 lacs</p>
                                                            <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                                            <p className="rating-company">4.9</p>
                                                            <p className="varify ">Experience : 2-3yrs</p>
                                                            <p className="varify "><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</p> */}
                                                            
                                                            



                                                        <div className="btone">
                                                        {/* <div className="company-list-btn"> */}
                                                        <Link to="/post" className="jobguru-btn">Apply</Link>
                                                        </div>

                                                        {/* </div> */}
                                                    </div>
                                                     </div>
                                                </li>

                                                <li>
                                                    <div className="top-company-list well">
                                                        <div className="company-list-logo media">
                                                            <Link class="pull-left" to="#">
                                                                <img className='media-object' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" alt="company list 1" />
                                                            </Link>
                                                        </div>
                                                        <div className="media-body">
                                                        {/* company-list-details  */}
                                                            <h4 className="media-heading">Amazon</h4>
                                                            {/* header  */}
                                                                <p className="open-icon"><i className="fa fa-briefcase"></i> Product Manager Ceo Marketing </p>
                                                                {/* open-icon  */}

                                                            <ul  className="list-inline list-unstyled">
                                                            <li><span className="company-state"><i className="fa fa-map-marker"></i> Salary : 4 lacs-5 lacs</span></li>
                                                                <li>|</li>
                                                                <span><i className="fa fa-check"></i> Verified</span>
                                                                <li>|</li>
                                                                <li>
                                                                    <span> Experience : 2-3yrs</span>
                                                                            {/* <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star"></span>
                                                                            <span class="glyphicon glyphicon-star-empty"></span> */}
                                                                </li>
                                                                <li>|</li>
                                                                <li>
                                                                    <span className="varify "><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</span>
                                                                    {/* <span><i class="fa fa-twitter-square"></i></span>
                                                                    <span><i class="fa fa-google-plus-square"></i></span> */}
                                                                </li>



                                                            </ul>

                                                            {/* <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p>
                                                            <p className="company-state"><i className="fa fa-map-marker"></i>Salary : 4 lacs-5 lacs</p>
                                                            <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                                            <p className="rating-company">4.9</p>
                                                            <p className="varify ">Experience : 2-3yrs</p>
                                                            <p className="varify "><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</p> */}
                                                            
                                                            



                                                        <div className="btone">
                                                        {/* <div className="company-list-btn"> */}
                                                        <Link to="/post" className="jobguru-btn">Apply</Link>
                                                        </div>

                                                        {/* </div> */}
                                                    </div>
                                                     </div>
                                                </li>

                                            </ul>
                                        </div>
                                    ))}
                                </InfiniteScroll>

                                {/* </div>

                                </div> */}
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-12">
                                <div className="load-more">
                                    <a href="#" className="jobguru-btn btonn">Browse more listing</a>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </section>
        )
    }
}

export default list
