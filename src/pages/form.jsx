import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Form from '../components/googleform';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Form"} />
            <Form />
        </Wrapper>
    );
};

export default index;