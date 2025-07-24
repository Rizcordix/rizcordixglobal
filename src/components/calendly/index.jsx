import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import HeaderFour from "@/src/layout/headers/header-4";
import React from 'react';
import CalendyWidget from './cal';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const Calendly = () => {
    return (
        <>
            <HeaderFour />
            <main>
                <Breadcrumb top_title="Expert Consultancy"  page_title="Calendly" />
                <CalendyWidget />
            </main>
            <FooterThree />
        </>
    );
};

export default Calendly;