import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import Page from '../../layouts/Page';
import Title from '../../components/Title';

const Home = () => {
  return (
    <Page>
      <Title title="Landing Page" />
      <SignUpForm />
    </Page>
  );
};

Home.propTypes = {};

export default Home;
