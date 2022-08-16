import React from 'react';
import { Helmet } from 'react-helmet';

const HtmlHeader = () => {
    return (
        <Helmet>
            <link rel='stylesheet' href='static/custom.css' />
        </Helmet>
    );
}

export default HtmlHeader;