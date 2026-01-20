import { Formik, Form, Field } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import { fetchCreateCategory } from "./api";
// SOLID
// Single responsibility -
// class should have only one reason to change

const initialValues = {
  name: "",
  image: "",
};

const CreateCategory = () => (
  <div>
    <h1>Create a new category</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        fetchCreateCategory(values, actions);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" />
          {/* If this field has been touched, and it contains an error, display
          it */}
          {touched.name && errors.name && <div>{errors.name}</div>}

          <Field name="image" />
          {touched.image && errors.image && <div>{errors.image}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CreateCategory;
