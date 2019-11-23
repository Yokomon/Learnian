import React from 'react';

const Section = () => {
    return (
        <main className="body py-5 container px-md-5">
            <section className="text-center py-4 d-flex flex-column align-items-center">
                <h5 className="text-uppercase mb-0 text-primary">What's this about?</h5>
                <h3 className="h4 my-3 font-weight-bold">Getting through school together</h3>
                <p style={{maxWidth: "500px"}} className="text-muted small">We believe that schooling is easier when students
                stick together. Our mission is to foster academic excellence via collaboration</p>
            </section>

            <div className="features row justify-content-center">
               <div className="col-md-4 d-flex justify-content-center">
                    <div className="feature-card rounded-sm py-4 px-4">
                        <div className="d-flex flex-column">
                            <div className="mx-auto splash position-relative d-flex justify-content-center align-items-center"
                                style={{width: "120px"}}>
                                <img src="/images/splash-bg.svg" alt="" className="img-auto" />
                                <div className="position-absolute d-flex justify-content-center align-items-center"
                                    style={{top: "0", left: "0", right: "0", bottom: "0"}}>
                                    <span className="h1"><i className="fas fa-school"></i></span>
                                </div>
                            </div>

                            <div className="mt-auto text-center">
                                <p className="title mb-3">Group work</p>
                                <p className="small">Who said Rome was built in a day?? When we work as one, incredible things can be accomplished and what may seem impossible is just with a blink of an eye.</p>
                            </div>
                        </div>
                    </div>
                    {/* Font awesome second image */}
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="feature-card rounded-sm py-4 px-4">
                            <div className="d-flex flex-column">
                                <div className="mx-auto splash position-relative d-flex justify-content-center align-items-center"
                                    style={{width: "120px"}}>
                                    <img src="/images/splash-bg.svg" alt="" className="img-auto"/>
                                    <div class="position-absolute d-flex justify-content-center align-items-center"
                                        style={{top: "0", left: "0", right: "0", bottom: "0"}}>
                                        <span className="h1"><i className="fas fa-users"></i></span>
                                    </div>
                                </div>

                                <div className="mt-auto text-center">
                                    <p className="title mb-3">Group work</p>
                                    <p className="small">Who said Rome was built in a day?? When we work as one, incredible things can be accomplished and what may seem impossible is just with a blink of an eye.</p>
                                </div>
                            </div>
                        </div>
                     </div>
                  
                    {/* Font awesome third image */}
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="feature-card rounded-sm py-4 px-4">
                            <div className="d-flex flex-column">
                                <div className="mx-auto splash position-relative d-flex justify-content-center align-items-center"
                                    style={{width: "120px"}}>
                                    <img src="/images/splash-bg.svg" alt="" className="img-auto"/>
                                    <div className="position-absolute d-flex justify-content-center align-items-center"
                                        style={{top: "0", left: "0", right: "0", bottom: "0"}}>
                                        <span className="h1"><i className="fas fa-graduation-cap"></i></span>
                                    </div>
                                </div>

                                <div className="mt-auto text-center">
                                    <p className="title mb-3">Less pointless googling</p>
                                    <p className="small">So, you have an impossible homework to which you can't find solutions online? Let your peers help you out!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>   
            </div>
        </main>
    )
}

export default Section;