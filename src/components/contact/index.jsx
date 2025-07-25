import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderFour from "@/src/layout/headers/header-4";
import React from 'react';
import ContactArea from './contact-area';
import GoogleMap from './google-map';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const Contact = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb top_title="Contact Us"  page_title="Contact Us" />
                <ContactArea />
                <GoogleMap />
                <FooterContact contact_style={true} />
            </main>
            <FooterThree />
        </>
    );
};

export default Contact;