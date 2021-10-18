import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validData } from "./validData";
import { notify } from "./toastify";

import styles from "./SignIn.module.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validData(data, "login"));
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
      notify("Your Login is Successfuly", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>Sign up</h2>

        <div className={styles.formField}>
          <label className={styles.label}>Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.unComplete
                : styles.forminput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label className={styles.label} htmlFor="password">Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.unComplete
                : styles.forminput
            }
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

        <div className={styles.footer}>
          <Link to="/SignUp">Sign up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
