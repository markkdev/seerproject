import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import './styles.scss';

const FormExampleForm = () => (
  <div className="form-wrapper">
    <Form>
      <Form.Field>
        <p className="field-title">First Name</p>
        <input placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <p className="field-title">Last Name</p>
        <input placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <p className="field-title">Username</p>
        <input placeholder="Username" />
      </Form.Field>
      <Form.Field>
        <p className="field-title">Email</p>
        <input placeholder="Email" />
      </Form.Field>
      <Form.Field>
        <p className="field-title">Password</p>
        <input placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <p className="field-title">Confirm Password</p>
        <input placeholder="Confirm Password" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  </div>
);

export default FormExampleForm;
