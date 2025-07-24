import React, { useEffect, useRef } from 'react';

const CalendlyWidget = () => {
    // useRef to get a reference to the div where Calendly will render
    const calendlyRef = useRef(null);

    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup function: remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
            // Optionally, if Calendly provides a way to destroy its widget, call it here.
            // For now, removing the script is sufficient for this simple case.
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-gray-50 rounded-lg shadow-xl max-w-4xl mx-auto my-8 ">
            <h2 className="text-6xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
                Schedule a <span style={{color: '#05dac3'}}>Meeting</span>
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl">
                Ready to discuss your project? Book a convenient time directly through our Calendly scheduler below.
            </p>

            {/* Calendly inline widget container */}
            <div
                ref={calendlyRef} // Attach the ref to this div
                className="calendly-inline-widget w-full rounded-lg overflow-hidden"
                data-url="https://calendly.com/rizcordixglobal/30min"
                style={{ minWidth: '320px', height: '700px' }} // Inline style for Calendly's requirements
            >
            </div>
        </div>
    );
};

export default CalendlyWidget;
