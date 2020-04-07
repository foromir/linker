import React from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as yup from "yup";

const LoginForm = ({ hendleSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={Validation}
      onSubmit={values =>
        hendleSubmit({
          email: values.email,
          password: values.password
        })
      }
    >
      {() => (
        <Form>
          <div className="wrapInput">
            <img src="/images/envelope.svg" alt="envelope" />
            <Field
              type="text"
              name="email"
              placeholder="Your email"
              className="input_auth"
            />
            <ErrorMessage
              name="email"
              render={msg => <div className="error_input">{msg}</div>}
            ></ErrorMessage>
          </div>

          <div className="space68" />
          <div className="wrapInput">
            <img src="/images/key.svg" alt="key" />
            <Field
              type="password"
              name="password"
              placeholder="Your Password"
              className="input_auth"
            />

            <ErrorMessage
              name="password"
              render={msg => <div className="error_input">{msg}</div>}
            ></ErrorMessage>
          </div>
          <div className="space50" />

          <button type="submit" className="btn default">
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Validation = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Enter your email"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at max 8 characters")
    .required("Enter your password")
});

export default LoginForm;
