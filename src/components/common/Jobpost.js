import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Jobpost.css';

export class Jobpost extends Component {

    render() {
        return (
            
            <div class="job-details">
                <section class="job-details__intro">
                    <a class="link" href="/companies/dreamstage">
                        <div class="d-logo">
                            <img alt="BYJUS logo" src="https://upload.wikimedia.org/wikipedia/commons/1/17/BYJU%27S_logo.png" />
                        </div>
                    </a>      <h1 class="title">
                        <span class="org-name"><a href="/companies/dreamstage">BYJUS</a> </span>
                        <span class="job-title">Data Analyst</span>
                    </h1>
                    <ul class="traits">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-briefcase">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            Other
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-clock">
                                <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            Full-time
                        </li>
                        <li>
                            <a target="_blank" href="https://dreamstage.live?src=wrkhq.com">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-globe">
                                    <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                                https://dreamstage.live
                            </a>          </li>
                    </ul>
                    <p class="posted-date">Posted on June 30th, 2021</p>
                </section>


                <div class="job-details__job-content">
                    <div class="job-details__main">
                        <section class="job-details__description" aria-label="job description">
                            <p><strong>BYJUS</strong></p>
                            <p><strong>Data Analyst</strong></p>
                            <p> </p><p><strong>About the Organization</strong></p>
                            <p>BYJUS is creating the new standard for the streaming live concert experience.  Launched in 2020, the Company began offering high resolution, always live streamed classical music concerts, and has quickly moved into rock, country, hip hop and other popular genres.  Founded by successful angel investor and former President, Global Digital Business and amp,  US Sales/Distribution at Sony, Thomas Hesse; world class Sony recording artist and festival organizer Jan Vogler; and successful serial entrepreneur and tech visionary Scott Chasin, the Company has attracted investment and software development talent, and now seeks to round out its team.</p>
                            <p></p>
                            <p><strong>The Position</strong></p>
                            <p>BYJUS is seeking a detailed-oriented, passionate, and resourceful data expert to join our team. The ideal candidate will be someone with extensive experience using SQL, data visualization tools like PowerBi or Google Data Data Studio, Excel, and Google Sheets and has honed their data analytics craft by solving real-world problems. This individual will have a keen understanding of data management, ideally within an arts entertainment, live events, or sports background or from other online or offline events businesses. As an analyst, will you work closely with Artist Relations, Marketing, and Finance to analyze the landscape of live music and hone our strategy for hosting impactful events. They will join a diverse team of industry experts and will be expected to have a deep curiosity for the ins and outs of the music industry and live streaming. The ideal candidate is someone who is looking to thrive in an environment where freedom and responsibility allows them to make an impact.</p>
                            <p></p>
                            <p><strong>Position Status, Location and Reporting</strong>
                            <br />This position will be fully remote but will report to teams located in New York City and Denver. </p><p></p><p><strong>Specific Responsibilities</strong></p>
                            
                            <ul>
                            <li>
                            <p>
                            Create a roadmap for the strategy of streaming events and drive our overall data strategy, initiatives, and objectives 
                            </p>
                            </li>
                            {/* <br />
                            <br /> */}
                            <li>
                            <p>
                            Work with the Artist Relations team to develop and refine a model for identifying talent for the platform and for forecasting event performance
                             </p>
                             </li>
                             {/* <br />
                             <br /> */}
                             <li>
                             <p>
                             Work closely with various stakeholders to fully understand our business requirements, departmental needs, and desired outcomes
                             </p>
                             </li>
                             {/* <br />
                             <br /> */}
                             <li>
                             <p>
                             Proactively identify strategic opportunities and deliver actionable information to increase revenue streams and drive new sources of revenue
                             </p>
                             </li>
                             {/* <br />
                             <br /> */}
                             <li>
                             <p>
                             Continually research the landscape of global streaming events, ticket sales, and fan engagement to synthesize findings in succinct reports and presentations
                             </p>
                             </li>
                             {/* <br />
                             <br /> */}
                             <li>
                             <p>
                             Utilize internal and external business intelligence and data analytics tools to create new reports, dashboards, analysis and methods for evaluating artists, understanding artist audiences and uncovering actionable streaming insights
                             </p>
                             </li>
                             {/* <br />
                             <br /> */}
                             <li>
                             <p>
                             Become a data expert on the many sources and systems to ensure data integrity and report accuracy, working with the engineering team to resolve technical data issues and recommend enhancements
                             </p>
                             </li>
                             {/* <br /> */}
                             <p>
                            </p>
                            <br/>
                            <p>
                            <strong>Qualifications</strong>
                            </p>
                            {/* <br /> */}
                            <li>
                            <p>
                            3+ years of experience working with data
                            </p>
                            </li>
                            <li>
                            <p>A foundation in statistics, economics, or predictive modeling preferred</p>
                            </li>
                            <li>
                            <p>Advanced knowledge of all primary MS Office software and advanced Excel skills</p>
                            </li>
                            <li>
                            <p>Experience in Python and/or R</p>
                            </li>
                            <li>
                            <p>Experience using business intelligence tools to extract, visualize and analyze data, including working with relational databases and writing SQL</p>
                            </li>
                            <li>
                            <p>Able to draw conclusions from data and propose effective solutions</p>
                            </li>
                            <li>
                            <p>Ability to think strategically, and translate strategy into goals and actions.</p>
                            </li>
                            <li>
                            <p>An excellent communicator and enthusiastic collaborator who works well with team members, internal partners, and senior management</p>
                            </li>
                            <li>
                            <p>Passionate about the music and entertainment business and a sense for the artist/music landscape</p>
                            </li>
                            <li>
                            <p>Plus but not required: experience using Google scripts to solve problems and analyze data. </p>
                            </li>
                            </ul>
                            <p> </p>
                            <p><strong>Compensation</strong></p>
                            <p>A competitive salary, incentive, benefits package and title will be offered, commensurate with the role and the relevant experience of the final hire. <br /></p>
                            <p><strong>Equal Opportunity and Diversity, Equity and amp Inclusion</strong></p>
                            <p>BYJUS is an equal opportunity employer and makes employment decisions without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, protected veteran status, disability status, age, or any other status protected by law.  Further, the company strives to create a diverse, welcoming, equitable and inclusive environment for all applicants, employees and partners.</p>
                            <p><strong>Disclaimer</strong></p>
                            <p>The job description above is intended to set forth the general nature of the work that will be expected of the person who takes on this role. The job description is not, however, meant to be construed as an exhaustive list of all the duties and responsibilities required for this role.  From time to time, all colleagues may be required to perform duties outside their normal responsibilities as needed, and the priorities within each role evolve over time based on the needs of the business.</p><p>
                            <br />
                            </p>
                            
                        </section>



                                <section>
                                    <script type="text/javascript">
                                        window.inflowOrganizationSlug = "dreamstage";
                                        window.inflowJobId = "22196";
                                    </script>

                                    <div id="apply" style={{scrollMarginTop: "40px"}}>
                                        <div class="Inflow-loader">
                                            <div class="Inflow-loader-bounce1"></div>
                                            <div class="Inflow-loader-bounce2"></div>
                                            <div class="Inflow-loader-bounce3"></div>
                                        </div>
                                    </div>
                                </section>

            </div>

                                <aside class="job-details__sidebar">
                                    <ul class="share-links">
                                        <li>
                                            <a href="mailto:?subject=DREAMSTAGE%20is%20hiring%20a%20remote%20Data%20Analyst&amp;body=https://rmtwrk.com/jobs/xf6pydwbsnor">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-mail">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                    <polyline points="22,6 12,13 2,6"></polyline>
                                                </svg>
                                                Tell a friend
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" title="Share on LinkedIn"
                                                href="https://www.linkedin.com/sharing/share-offsite/?url=https://rmtwrk.com/jobs/xf6pydwbsnor">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                    <rect x="2" y="9" width="4" height="12"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                                Share on LinkedIn
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/intent/tweet?text=DREAMSTAGE%20is%20hiring%20a%20Data%20Analyst&url=https://rmtwrk.com/jobs/xf6pydwbsnor">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                </svg>
                                                Tweet this job
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="quality-message">Help us maintain the quality of jobs posted on RmtWrk. Let us know if this job isn’t really remote.</p>
                                    <a href="mailto:support@wrkhq.com?subject=Reporting%20a%20RmtWrk%20Job%20Post&amp;body=I&#39;d%20like%20to%20report%20the%20following%20Job%20as%20being%20either%20an%20invalid%20Remote%20Job%20or%20not%20appropriate%20for%20RmtWrk.com:%0A%0ADREAMSTAGE%20-%20Data%20Analyst%0A%0Ahttps://rmtwrk.com/jobs/xf6pydwbsnor" class="report">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-flag">
                                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>
                                        </svg>
                                        Report this post
                                    </a>
                                </aside>
                                 </div>

                                </div>

                                )
}

}

                                export default Jobpost