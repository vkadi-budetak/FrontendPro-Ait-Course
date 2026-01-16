import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const SignIn = () => (
  <div>
    <h1>Displaying Error Messages</h1>
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" />
          {/* If this field has been touched, and it contains an error, display
          it */}
          {touched.email && errors.email && <div>{errors.email}</div>}

          <Field name="password" />
          {/* If this field has been touched, and it contains an error, display it
           */}
          {touched.password && errors.password && <div>{errors.password}</div>}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignIn;
