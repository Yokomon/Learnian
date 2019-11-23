import React from "react";

const Section2 =() =>{
    return(
        <div>
            <section className="text-center mt-5 py-4 d-flex flex-column align-items-center">
                <h3 className="h4 my-3 font-weight-bold">What's trending?</h3>
                    <p style={{maxWidth: "500px" }} className="medium text-muted">
                        This is a section where current news and projects will be uploaded concerning each faculties in the University.
                        Here we learn about new tools discovered daily that will aid students and lecturers in achieving their individual goals.
                    </p>
             </section>

         {/* // This is the section for the Newsletter */}
        
         <section className="recent-uploads">
         <div className="row">
            <div className="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                <div className="upload-item rounded-sm">
                    <div className="upload-preview">
                        <img src="/images/1st.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="upload-body px-3 py-3">
                        <div className="d-flex  text-muted px-2 py-2">
                            <span className="small mr-auto">TECHNOLOGY</span>
                            <span className="small text-warning">GLOBAL</span>
                        </div>
                        <h5 className="title h6 font-weight-bolder my-3 text-capitalize">KaOS Linux Brings Order to the Desktop</h5>
                        <p className="small fade-overflow  text-muted">The KaOS distro is an 
                            up-and-coming Linux OS that provides one of the best integrations yet of
                             a refreshed KDE-based computing platform. Two types of users gravitate 
                             to this solidly maintained distribution: those who are frustrated by poor user experiences with Linux distros that are bloated and cumbersome to use; and those who wan
                            t a better and more controlled KDE desktop environment</p>
                        <p className="text-center mt-3 small"><a href="https://www.technewsworld.com/story/KaOS-Linux-Brings-Order-to-the-Desktop-86345.html"
                                className="btn btn-outline-accent btn-md btn-rounded">View</a></p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                <div className="upload-item rounded-sm">
                    <div className="upload-preview">
                        <img src="https://www.worldpharmanews.com/images/logo/bayer.png" className="img-fluid" alt=""/>
                    </div>
                    <div className="upload-body px-3 py-3">
                        <div className="d-flex  text-muted px-2 py-2">
                            <span className="small mr-auto">PHARMACY</span>
                            <span className="small text-warning">GLOBAL</span>
                        </div>
                        <h5 className="title h6 font-weight-bolder my-3 text-capitalize">Bayer invests $50M in eGenesis Series B financing</h5>
                        <p className="small fade-overflow  text-muted">eGenesis, a biotechnology company utilizing breakthrough 
                            gene editing technologies for the development of effective human-compatible organs to address the global organ shortage, 
                            successfully completed a USD 100 million Series B financing. The financing was led by 
                            Fresenius Medical Care Ventures (FMCV), with participation from new investors including Leaps by Bayer and Wellington Partners</p>
                        <p className="text-center mt-3 small"><a href="https://www.worldpharmanews.com/bayer/5012-bayer-invests-usd-50-million-in-egenesis-series-b-financing-round"
                                className="btn btn-outline-accent btn-md btn-rounded">View</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                <div className="upload-item rounded-sm">
                    <div className="upload-preview">
                        <img src="https://i.guim.co.uk/img/media/b29a436648610cd6e24d912c3cba7b6f3f1501cd/0_114_3500_2100/master/3500.jpg?width=620&quality=85&auto=format&fit=max&s=b562eee1a807ec4a71f93693e52ba496" class="img-fluid" alt=""/>
                    </div>
                    <div className="upload-body px-3 py-3">
                        <div className="d-flex  text-muted px-2 py-2">
                            <span className="small mr-auto">LAW</span>
                            <span className="small text-warning">GLOBAL</span>
                        </div>
                        <h5 className="title h6 font-weight-bolder my-3 text-capitalize">IPP sentencing regime in England and Wales called 'deeply harmful'</h5>
                        <p className="small fade-overflow  text-muted">Justice officials in England and Wales are facing renewed calls to deal with 
                            thousands of prisoners still jailed under an abolished Kafkaesque sentencing regime that a report 
                            has branded “deeply harmful” for families.</p>
                        <p className="text-center mt-3 small"><a href="https://www.theguardian.com/law/2019/nov/10/ipp-sentencing-regime-in-england-and-wales-branded-deeply-harmful"
                                className="btn btn-outline-accent btn-md btn-rounded">View</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                <div className="upload-item rounded-sm">
                    <div className="upload-preview">
                        <img src="https://www.pharmanewsonline.com/wp-content/uploads/2019/08/pharmacy-324x160.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="upload-body px-3 py-3">
                        <div className="d-flex  text-muted px-2 py-2">
                            <span className="small mr-auto">PHARMACY</span>
                            <span className="small text-warning">LOCAL</span>
                        </div>
                        <h5 className="title h6 font-weight-bolder my-3 text-capitalize">The Future of Pharmacy in Nigeria</h5>
                        <p className="small fade-overflow  text-muted">There seems to be an enormous gap between 
                            what pharmacists actually 
                            do and what the public perceive them to do.
                             Despite their immense potentials</p>
                        <p className="text-center mt-3 small"><a href="https://www.pharmanewsonline.com/the-future-of-pharmacy-in-nigeria/"
                                className="btn btn-outline-accent btn-md btn-rounded">View</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                <div className="upload-item rounded-sm">
                    <div className="upload-preview">
                        <img src="data:image/jpeg;base64,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" class="img-fluid" alt=""/>
                    </div>
                    <div className="upload-body px-3 py-3">
                        <div className="d-flex  text-muted px-2 py-2">
                            <span className="small mr-auto">AGRICULTURE</span>
                            <span className="small text-warning">AFRICA</span>
                        </div>
                        <h5 className="title h6 font-weight-bolder my-3 text-capitalize">Psaltry launches first Cassava-based Sorbitol factory in Africa</h5>
                        <p className="small fade-overflow  text-muted">Psaltry International Company Limited (PIL), an indigenous
                             agro-allied company founded in 2005 for marketing of cassava produce, elevation of farming business 
                             in rural areas and production
                             of Food Grade Starch and High Quality Cassava Flour</p>
                        <p className="text-center mt-3 small"><a href="https://tribuneonlineng.com/psaltry-launches-first-cassava-based-sorbitol-factory-in-africa/"
                                className="btn btn-outline-accent btn-md btn-rounded">View</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                <div className="upload-item rounded-sm">
                    <div className="upload-preview">
                        <img src="https://www.techtrendsng.com/wp-content/uploads/2019/09/Summit-partners-and-sponsors-800x400.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="upload-body px-3 py-3">
                        <div className="d-flex  text-muted px-2 py-2">
                            <span className="small mr-auto">TECHNOLOGY</span>
                            <span className="small text-warning">LOCAL</span>
                        </div>
                        <h5 className="title h6 font-weight-bolder my-3 text-capitalize">Nigeria Innovation Summit Calls for Collaborative Partnerships</h5>
                        <p className="small fade-overflow  text-muted">‘Accelerating Nigeria’s Economic Growth Through Innovation’, 
                            organized by Emerging Media, held at Sheraton Hotel
                            , Ikeja, Lagos on August 20-21, 2019 was successfully concluded with the 
                            participation of over 500 delegates and stakeholders.</p>
                        <p className="text-center mt-3 small"><a href="https://www.techtrendsng.com/the-2019-nigeria-innovation-summit-communique/"
                                className="btn btn-outline-accent btn-md btn-rounded">View</a>
                        </p>
                    </div>
                </div>
            </div>
          </div>
         </section>
        </div>
    );
}

export default Section2