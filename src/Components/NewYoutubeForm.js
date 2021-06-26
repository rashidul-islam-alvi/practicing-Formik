/** @format */

import React from "react";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import textError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    twitter: "",
  },
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invailed Email Format!").required("Required!"),
  channel: Yup.string().required("Required!"),
  comments: Yup.string().required("Required"),
});

const NewYoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      <Form className="form-container">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={textError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errmessage) => {
              return <div className="error">{errmessage}</div>;
            }}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={textError} />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" name="comments" id="comments" />
          <ErrorMessage name="comments" />
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
          <ErrorMessage name="social.facebook" component={textError} />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter Profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
          <ErrorMessage name="social.twitter" component={textError} />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default NewYoutubeForm;
