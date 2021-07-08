import React, { useState } from "react";
import { MySelect } from "./MySelect";
import { MyTextInput } from "./MyTextInput";
import { MyCheckbox } from "./MyCheckbox";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export const SignupForm = () => {
  const [state, setState] = useState([]);

  return (
    <>
      <h1>MY INFO!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(val) => {
          console.log(val);
          setState(() => [val]);
        }}
      >
        <Form>
          <MyTextInput label="First Name" name="firstName" type="text" />

          <MyTextInput label="Last Name" name="lastName" type="text" />

          <MyTextInput label="Email Address" name="email" type="email" />

          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {state.map((val, index) => (
        <ul key={index}>
          <li>{val.firstName}</li>
          <li>{val.lastName}</li>
          <li>{val.email}</li>
          <li>{val.jobType}</li>
        </ul>
      ))}
    </>
  );
};
