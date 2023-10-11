"use client";

import { Formik } from "formik";
import * as yup from "yup";

let LoginSchema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

export default function Login() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="text-center w-full">
        <h2>Welcome to admin panel</h2>
        <div className="mt-10">
          <Formik
            validationSchema={LoginSchema}
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              alert(JSON.stringify(values));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="login">
                <div className="form">
                  <form noValidate onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                      placeholder="Enter username"
                    />
                    <p className="text-center text-red-900">
                      {errors.username && touched.username && errors.username}
                    </p>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Enter password"
                    />
                    <p className="text-center text-red-900">
                      {errors.password && touched.password && errors.password}
                    </p>
                    <button type="submit">Login</button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
