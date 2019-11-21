import React from 'react';
import Page from '../../layouts/Page';
import Title from '../../components/Title';
import VerificationValues from '../../components/VerificationValues';
import VerificationOptions from '../../components/VerificationOptions';

const Verification = () => {
  return (
    <Page>
      <Title title="Please Verify Your Information" />
      <VerificationValues />
      <VerificationOptions />
    </Page>
  );
};

Verification.propTypes = {};

export default Verification;
