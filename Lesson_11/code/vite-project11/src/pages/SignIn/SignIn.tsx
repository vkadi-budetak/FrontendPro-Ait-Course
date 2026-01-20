import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ROUTES } from "../../shared/routes";
import { useAuth } from "../../hooks/useAuth";

const SigninSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const fetchLogin = async (credentials: { email: string; password: string }) => {
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (res.ok) {
    const { access_token } = await res.json();
    localStorage.setItem("access_token", access_token);
  }
};

const Signin = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const fetchProfile = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        accept: "Application/json",
      },
    });
    const userRes = await res.json();
    setUser(userRes);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          password: "",
          email: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          fetchLogin(values);
          fetchProfile();
          // redirect us to home page
          navigate(ROUTES.PROFILE_DATE);
          //  https://api.escuelajs.co/api/v1/auth/login
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
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
