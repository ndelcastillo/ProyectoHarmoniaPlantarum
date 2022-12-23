import React from 'react'
import Form from 'react-bootstrap/Form';
import './formInput.css'

export default function FormInput ({children, value, name, inputChangeHandler}) {
  return (
    <Form.Group className="mb-4" controlId="formBasicPhone">
    <Form.Control
      value={value}
      onChange={inputChangeHandler}
      name={name}
      type="text"
      placeholder={children}
      required
    />
  </Form.Group>
  )
}