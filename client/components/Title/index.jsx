import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Title = ({ title }) => {
  return <p className="title">{title}</p>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
