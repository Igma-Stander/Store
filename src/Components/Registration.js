import React from "react";
import { useFormik } from "formik";

function Registration() {
  let validate = (values) => {
    let errors = {};

    let passwordNum = /(?=.*[0-9])/;
    let passwordUpper = /(?=.*[A-Z])/;
    let passwordLower = /(?=.*[a-z])/;
    let passwordSpecial = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~`\-="'])/;

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "password must be 8 characters long";
    } else if (!passwordNum.test(values.password)) {
      errors.password = "Invalid password. Must contain one number";
    } else if (!passwordUpper.test(values.password)) {
      errors.password =
        "Invalid password. Must contain atleast one upper case letter.";
    } else if (!passwordLower.test(values.password)) {
      errors.password =
        "Invalid password. Must contain atleast one lower case letter.";
    } else if (!passwordSpecial.test(values.password)) {
      errors.password =
        "Invalid password. Must contain atleast one special character.";
    }

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less.";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less.";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address.";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password doesn't match.";
    }

    return errors;
  };

  let SignupForm = () => {
    let formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validate,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <h1 style={{ color: "rgb(0, 55, 170)" }}>Sign up here</h1>
        <label htmlFor="firstName" className="label">
          First Name
        </label>
        <input
          className="register"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <br />

        <label htmlFor="lastName" className="label">
          Last Name
        </label>
        <input
          className="register"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <br />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          style={{ marginLeft: "40px" }}
          className="register"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <br />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          style={{ marginLeft: "10px" }}
          className="register"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <br />

        <label htmlFor="confirmPassword" className="label">
          Confirm Password
        </label>
        <input
          style={{ marginRight: "50px" }}
          className="register"
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />

        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
        <br />

        <button type="submit" className="login">
          Submit
        </button>
      </form>
    );
  };
  return (
    <div>
      <SignupForm />
    </div>
  );
}
export default Registration;
