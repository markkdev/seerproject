import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Page = ({ children }) => {
    return <div>{children}</div>;
};

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Page;
