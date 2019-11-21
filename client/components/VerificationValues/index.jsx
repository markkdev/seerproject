import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Verification = () => {
  const { firstName, lastName, username, email } = useSelector(
    state => state.form
  );

  return (
    <div className="verification-wrapper">
      <span className="field-container">
        <p className="field">First Name:</p>
        <p className="field">Last Name:</p>
        <p className="field">Username:</p>
        <p className="field">Email:</p>
      </span>
      <span className="field-container">
        <p className="value">{firstName}</p>
        <p className="value">{lastName}</p>
        <p className="value">{username}</p>
        <p className="value">{email}</p>
      </span>
    </div>
  );
};

Verification.propTypes = {};

export default Verification;
