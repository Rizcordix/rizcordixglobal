import React from 'react';

const GoogleFormWidget = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-gray-50 rounded-lg shadow-xl max-w-4xl mx-auto my-8 font-inter">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
                Submit Your <span style={{color: '#05dac3'}}>Inquiry</span>
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl">
                Please fill out the form below to submit your inquiry. We look forward to hearing from you!
            </p>

            {/* Google Form inline widget container */}
            <div className="w-full h-[856px] sm:h-[700px] md:h-[856px] lg:h-[900px] rounded-lg overflow-hidden border border-gray-300">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScDS_ayPBfeqoMn8yD9iMSXIcLZ1LwA6oxy-tU5nmIIUwyIYQ/viewform?embedded=true"
                    width="100%" // Make width responsive
                    height="980px" // Make height responsive
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Google Inquiry Form" // Add a title for accessibility
                    className="w-full h-full"
                >
                    Loading…
                </iframe>
            </div>
        </div>
    );
};

export default GoogleFormWidget;
