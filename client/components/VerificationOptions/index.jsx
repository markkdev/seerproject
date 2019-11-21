import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import './styles.scss';

const VerificationOptions = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { firstName, lastName, username, email, password } = useSelector(
    state => state.form
  );
  const sendConfirmation = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post('/api/verify', { firstName, lastName, username, email, password })
      .then(res => {
        console.log(res.status);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="options-wrapper">
      <Button primary loading={isLoading} onClick={sendConfirmation}>
        Confirm
      </Button>
      <Button secondary onClick={() => history.goBack()} disabled={isLoading}>
        Correct Information
      </Button>
    </div>
  );
};

VerificationOptions.propTypes = {};

export default VerificationOptions;
