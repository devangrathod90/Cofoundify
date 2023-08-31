import React from "react";
import { ErrorMessage, useField } from "formik";
import styled from "styled-components";

// style
const costomStyle = {
  color: "black",
  fontSize: ".8rem",
};

const Error = styled.div`
  color: red;
  font-size: 0.7rem;
  position: relative;
`;

const Input = styled.input`
  font-size: .8rem;
`;

const Div=styled.div`

`;


export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name} style={costomStyle}>
        {label}
      </label>
      <Input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />

      <ErrorMessage component={Error} name={field.name} />
    </div>
  );
};

export const Google = () => {
  return (
    <div class="card social-block" style={{marginTop:"4rem"}}>
      <div >
        <a class="btn btn-block" href="/auth/google" role="button" style={{fontSize:".9rem",fontWeight:"500",color:"rgb(102, 102, 102)"}}>
          <i class="fab fa-google"></i>
          Sign Up with Google
        </a>
      </div>
    </div>
  );
};
