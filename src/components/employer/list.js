import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from "react-infinite-scroll-component";
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
            <div>
                <section className="jobguru-job-tab-area section_70" style={{ backgroundColor: "F6F6F6" }}>
                    <div className="container">
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





                                            <ul>

                                                <li>
                                                    <div className="top-company-list">
                                                        <div className="company-list-logo">
                                                            <Link to="#">
                                                                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/1/17/BYJU%27S_logo.png" alt="company list 1" />
                                                            </Link>

                                                        </div>
                                                        <div className="company-list-details">
                                                            <h3 className="header"><a href="#">Byjus</a>
                                                                <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p>
                                                            </h3>

                                                            {/* <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p> */}
                                                            <p className="company-state"><i className="fa fa-map-marker"></i>Fixed price : 4 lacs-5 lacs</p>
                                                            {/* <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                                            <p className="rating-company">4.9</p> */}
                                                            <p className="varify">Experience : 2-3yrs</p>
                                                            <p className="varify"><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</p>
                                                        </div>
                                                        <div className="company-list-btn">
                                                            <a href="#" className="jobguru-btn bton">Apply</a>

                                                        </div>
                                                    </div>
                                                </li>



                                                <li>
                                                    <div className="top-company-list">
                                                        <div className="company-list-logo">
                                                            <a href="#">
                                                                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Asian_Paints_Logo.svg/640px-Asian_Paints_Logo.svg.png" alt="company list 1" />
                                                            </a>

                                                        </div>
                                                        <div className="company-list-details">
                                                            <h3><a href="#">Asian Paints</a>
                                                                <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p></h3>

                                                            {/* <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p> */}
                                                            <p className="company-state"><i className="fa fa-map-marker"></i>Fixed price : 4 lacs-5 lacs</p>
                                                            {/* <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                                            <p className="rating-company">4.9</p> */}
                                                            <p className="varify">Experience : 2-3yrs</p>
                                                            <p className="varify"><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</p>
                                                        </div>
                                                        <div className="company-list-btn">
                                                            <a href="#" className="jobguru-btn bton">Apply</a>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="top-company-list">
                                                        <div className="company-list-logo">
                                                            <a href="#">
                                                                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/GoogleLogoSept12015.png/640px-GoogleLogoSept12015.png" alt="company list 1" />
                                                            </a>
                                                        </div>
                                                        <div className="company-list-details">
                                                            <h3><a href="#">Google</a>
                                                                <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p>
                                                            </h3>

                                                            {/* <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p> */}
                                                            <p className="company-state"><i className="fa fa-map-marker"></i>Fixed price : 4 lacs-5 lacs</p>
                                                            {/* <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                                            <p className="rating-company">4.9</p> */}
                                                            <p className="varify">Experience : 2-3yrs</p>
                                                            <p className="varify"><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</p>
                                                        </div>
                                                        <div className="company-list-btn">
                                                            <a href="#" className="jobguru-btn bton">Apply</a>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="top-company-list">
                                                        <div className="company-list-logo">
                                                            <a href="#">
                                                                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" alt="company list 1" />
                                                            </a>
                                                        </div>
                                                        <div className="company-list-details">
                                                            <h3><a href="#">Amazon</a>
                                                                <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p>
                                                            </h3>
                                                            {/* <p className="open-icon"><i className="fa fa-briefcase"></i>Product Manager</p> */}
                                                            <p className="company-state"><i className="fa fa-map-marker"></i>Fixed price : 4 lacs-5 lacs</p>
                                                            {/* <p className="varify"><i className="fa fa-check"></i>Verified</p>
                                                            <p className="rating-company">4.9</p> */}
                                                            <p className="varify">Experience : 2-3yrs</p>
                                                            <p className="varify"><i className="fa fa-map-marker"></i> Ankleshwar , Gujarat</p>
                                                        </div>
                                                        <div className="company-list-btn">
                                                            <Link to="#" className="jobguru-btn bton">Apply</Link>
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
            </div>
        )
    }
}

export default list
