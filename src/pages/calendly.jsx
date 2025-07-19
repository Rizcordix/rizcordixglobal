import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Calendly from '../components/calendly';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Calendly"} />
            <Calendly />
        </Wrapper>
    );
};

export default index;