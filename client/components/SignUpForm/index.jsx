import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { submitForm } from '../../actions/form';
import './styles.scss';

const FormExampleForm = () => {
  const dispatch = useDispatch();
  const {
    firstName: firstNameRedux,
    lastName: lastNameRedux,
    username: usernameRedux,
    email: emailRedux,
    password: passwordRedux,
    confirmPassword: confirmPasswordRedux
  } = useSelector(state => state.form);
  const history = useHistory();
  const [firstName, updateFirstName] = useState(firstNameRedux);
  const [lastName, updateLastName] = useState(lastNameRedux);
  const [username, updateUsername] = useState(usernameRedux);
  const [email, updateEmail] = useState(emailRedux);
  const [password, updatePassword] = useState(passwordRedux);
  const [confirmPassword, updateConfirmedPassword] = useState(
    confirmPasswordRedux
  );
  const submitValues = e => {
    e.preventDefault();
    const values = {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword
    };
    dispatch(submitForm(values));
    history.push('/verify');
  };
  const passwordsMatch = password === confirmPassword;
  return (
    <div className="form-wrapper">
      <Form onSubmit={submitValues}>
        <Form.Input
          required
          label="First Name"
          placeholder="First Name"
          value={firstName}
          onChange={e => updateFirstName(e.target.value)}
        />
        <Form.Input
          required
          label="Last Name"
          placeholder="Last Name"
          value={lastName}
          onChange={e => updateLastName(e.target.value)}
        />
        <Form.Input
          required
          placeholder="Username"
          label="Username"
          value={username}
          onChange={e => updateUsername(e.target.value)}
        />
        <Form.Input
          required
          placeholder="Email"
          label="Email"
          value={email}
          type="email"
          onChange={e => updateEmail(e.target.value)}
        />

        <Form.Input
          required
          label="Password"
          placeholder="Password"
          value={password}
          type="password"
          onChange={e => updatePassword(e.target.value)}
        />
        <Form.Input
          required
          label="Confirm Password"
          placeholder="Confirm Password"
          value={confirmPassword}
          error={passwordsMatch ? null : 'Please Enter The Same Password'}
          type="password"
          onChange={e => updateConfirmedPassword(e.target.value)}
        />
        <Button type="submit" disabled={!passwordsMatch}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormExampleForm;
