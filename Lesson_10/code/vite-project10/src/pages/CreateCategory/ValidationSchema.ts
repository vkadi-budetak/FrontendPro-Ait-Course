import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string().url("Must be a valid URL").required("Required"),
});
