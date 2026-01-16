import { Formik, Form, Field } from "formik";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const fetchRegister = async (values: SignUpFormValues) => {
  const res = await fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    // headers - прописываем что отправляем инфу в формате
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(values),
  });
  const obj = await res.json();
  console.log(obj);
};

export const SignUp = () => {
  //! значения по умолчанию
  const initialValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
    avatar: "",
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          // отправляем запрос на регистрацию
          fetchRegister(values);
          //   alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="password" />

          <label htmlFor="avatar">Avatar</label>
          <Field id="avatar" name="avatar" placeholder="avatar" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
