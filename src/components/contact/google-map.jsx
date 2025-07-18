import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
            <div className="tp-contact-map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1240.8102799706267!2d0.051586!3d51.538519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a64a34fc5277%3A0x971c3e61d9cd2e78!2s184%20High%20St%20N%2C%20London%20E6%2C%20UK!5e0!3m2!1sen!2sus!4v1752821773989!5m2!1sen!2sus" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
            </div>
         </div>
        </>
    );
};

export default GoogleMap;