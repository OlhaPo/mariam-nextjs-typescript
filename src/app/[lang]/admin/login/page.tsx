"use client";

import LinkButton from "@/components/uikit/button";
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
        <div>
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
            <Form className="">
              <label htmlFor="login">Username</label>
              <Field id="username" name="username" />
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" />
              <button type="submit">Login</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
