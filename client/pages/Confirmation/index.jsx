import React from 'react';
import Page from '../../layouts/Page';
import Title from '../../components/Title';
import './styles.scss';

const Confirmation = () => {
  return (
    <Page>
      <Title title="Confirmed!" />
      <img
        className="success-kid"
        src="https://image.businessinsider.com/56e3189152bcd0320c8b5cf7"
        alt="success"
      />
    </Page>
  );
};

Confirmation.propTypes = {};

export default Confirmation;
