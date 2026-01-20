import type { FormikHelpers } from "formik";

interface CategoryDto {
  name: string;
  image: string;
}

export async function fetchCreateCategory(
  values: CategoryDto,
  actions: FormikHelpers<CategoryDto>,
) {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      throw new Error("Failed creating category");
    }
    if (res.status === 201) {
      console.log("Success");
      actions.resetForm();
    }
  } catch (err) {
    console.error(err);
  }
}
