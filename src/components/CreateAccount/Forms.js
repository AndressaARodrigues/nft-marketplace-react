import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from '../../UI/Button';
import classes from './Forms.module.css';

function SimpleForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // lógica de processamento do formulário aqui, se necessário
    console.log(formData);
  };

  return (
      <Form onSubmit={handleSubmit} className={classes.formsContainer}>
        <Form.Group controlId="username">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
            <input
            type="email"
            id="email"
            name="email"
            placeholder='Email Address'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
           <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
           <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button className={classes.submitButton} type="submit" >Create Account</Button>
      </Form>
  );
}

export default SimpleForm;
