import React from 'react';

const topHeader = () => {
    return(
        <div className="main-header Header">
            <div className="header-container position-relative" style={{padding: "150px",overflowX:"hidden"}}>
                <div className="container">
                    <div className="header-context">
                        <span className="small">Online Education</span>
                        <h1 className="h3">Live. Learn. Share!</h1>
                        <p className="header-description">
                        Get instant access to hundreds of textbooks, course notes, (solved)
                        assignments and lots of other resources that makes schooling easier on you. All you gotta do is
                        help someone else
                        </p>
                        <div className="d-flex mt-4">
                            <a href="/" className="btn btn-accent btn-rounded px-4 shadow-lg">Get started</a>
                        </div>
                    </div>
                </div>
                <div className="position absolute d-md-block" style={{right: "-10px", top: "0", width:"45%", maxWidth:"500px", display: "none"}}>
                    <img src="/images/Img.svg" alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default topHeader;