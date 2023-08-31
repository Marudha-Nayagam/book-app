import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const FormvalidationsSchema = yup.object({
  email: yup
  .string()
  .min(5,"Need a longer email")
  .matches(/^[A-Z0-9.-_+%]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "enter vaild email")
  .required(),

  password: yup
  .string()
  .min(8, "must be 8 characters")
  .max(12,"maximum 12 character")
  .matches(
    /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$&*]).{8,}$/,
    "enter valid password"
  )
  .required(),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: FormvalidationsSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
      <h1>Basic Form </h1>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br></br>
      { formik.touched.email && formik.errors.email ?  formik.errors.email : ""} 
      <br></br>
      <input
        id="password"
        name="password"
        // type="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br></br>
      { formik.touched.password && formik.errors.password ?  formik.errors.password : ""}
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
