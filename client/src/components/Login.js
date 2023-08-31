import React, { useState} from 'react';
import { Formik, Form } from 'formik';
import { TextField ,Google } from './TextField';
import * as Yup from 'yup';
import styled from 'styled-components';

// Create a styled component
const H1=styled.h1`
  font-weight :700;
  color: black;
  font-size :1.775rem;
  font-variant: all-small-caps;
  font-family: 'Russo One', sans-serif;
  text-align: left;
`;

const Div=styled.div`
color:black;
font-size:1rem;
`;

const Button=styled.button`
border-radius:0.4rem;
font-size:.9rem;
`;


export const Login = () => {
   const validate = Yup.object({  
    firstName: Yup.string()
    .min(3, 'Must be 15 characters or less')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'), 
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    })
  
  return (
  <Div className="container mt-3">
  <div className="row" style={{marginTop:"70px"}}>
    <div className="col-md-5">
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div  style={{marginTop:"3.5rem"}}>
          {/* <img style={{width:"200px"}} src="./img/logo.png"/> */}
          <H1 className="my-4 .display-4" >Sign into your account</H1>
          <p>Or <a class="text-blue-600 hover:text-blue-500" href="/Signup">click here to create </a> a free account</p>

          <Form>
            
            <TextField style={{marginBottom:"1rem"}} label="Email" name="email" type="email"  />
            <TextField label="password" name="password" type="password"  />
            
            <Button className="btn btn-primary mt-3" style={{width:"9rem"}} type="submit">Login</Button>
            <Button className="btn btn-danger mt-3 ml-3" type="reset">Reset</Button>
            <Google  />
          </Form>
        </div>
      )}
    </Formik>
    </div>
    <div className="col-md-6 my-auto">
    <img className="img-fluid w-100" style={{marginLeft:"2rem" ,position: "relative" }} src="./img/business-analysis (3).gif" alt=""/>

    </div>
  </div>
</Div>
    
  )
}
