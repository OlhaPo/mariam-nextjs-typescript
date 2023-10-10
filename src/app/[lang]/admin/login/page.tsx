"use client";

import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  username: string;
  password: string;
}

export default function Login() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="text-center w-full">
        <h2>Welcome to admin panel</h2>
        <div className="mt-10">
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form className="flex flex-col gap-4 w-1/4 mx-auto">
              <label htmlFor="login" className="text-left">
                Username
              </label>
              <Field id="username" name="username" />
              <label htmlFor="password" className="text-left">
                Password
              </label>
              <Field id="password" name="password" />
              <button
                type="submit"
                className="rounded-md border-2 p-2 bg-white text-black"
              >
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
