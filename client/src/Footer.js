import React from 'react';

const Footer = () => {
    return(
        <section className="py-2 bg-primary text-white">
        <div className="container">
            <div className="d-flex justify-content-center flex-columns">
                <div className="py-4 faq d-flex flex-column">
                    <h2 className="text-center font-weight-bolder">About Us</h2>
                    <div className="px-4 py-4 faq-item rounded-sm">
                        <p className="title">This project was designed and implemented by TeamHex. Other features will be added soon enough.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer;