import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validData } from "./validData";
import { notify } from "./toastify";

import styles from "./SignIn.module.css";

const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccept: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validData(data, "signup"));
    console.log(errors);
  }, [data, touched]);

  const changHandler = (event) => {
    if (event.target.name === "isAccept") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("Your Sign up is Successfuly", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccept: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Sign up</h2>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            className={(errors.name && touched.name)? styles.unComplete : styles.forminput }
            type="text"
            name="name"
            value={data.name}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={(errors.email && touched.email)?  styles.unComplete : styles.forminput}
            type="text"
            name="email"
            value={data.email}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={(errors.password && touched.password)? styles.unComplete :styles.forminput }
            type="password"
            name="password"
            value={data.password}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={(errors.confirmPassword && touched.confirmPassword)?styles.unComplete  : styles.forminput}
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formField}>
            <div className={styles.checkBoxContainer}>
                <label className={styles.labalCheckBox}>I accept privacy of policy</label>
                <input
                    // className={(errors.isAccept && touched.isAccept)?styles.unComplete  : styles.forminput}
                    type="checkbox"
                    name="isAccept"
                    value={data.isAccept}
                    onChange={changHandler}
                    onFocus={focusHandler}
                />
                {errors.isAccept && touched.isAccept && (
                    <span>{errors.isAccept}</span>
                )}
            </div>
        </div>
        <div className={styles.footer}>
          <Link to="/LogIn">Login</Link>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
