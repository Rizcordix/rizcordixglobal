import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderFour from "@/src/layout/headers/header-4";
import React from 'react';
import GoogleFormWidget from './form';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const Form = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb top_title="Post An Inquiry"  page_title="Form" />
                <GoogleFormWidget />
            </main>
            <FooterThree />
        </>
    );
};

export default Form;