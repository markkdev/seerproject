import React from 'react';
import HelloWorld from '../../components/HelloWorld';
import Page from '../../layouts/Page';

const Home = () => {
    return (
        <Page>
            <HelloWorld />
        </Page>
    );
};

Home.propTypes = {};

export default Home;
