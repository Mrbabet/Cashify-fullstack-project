import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "../../components/loginform/LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const isEmailInvalid = !email && isSubmitted;
  const isPasswordInvalid = !password && isSubmitted;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const loginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(loginData));
    form.reset();
    setIsSubmitted(true);
  };

  return (
    <section className={css.loginSection}>
      <div className={css.wrapper}>
        <div className={css.logo}></div>
        <div className={css.formContainer}>
          <div className={css.paragraphDiv}>
            <p className={css.paragraph}>
              You can log in with your Google Account:
            </p>
            <button className={css.googleBttn}>
              <div className={css.googlesymbol}></div>
              <span>Google</span>
            </button>
            <p className={css.paragraph}>
              Or log in using an email and password, after registering:
            </p>
          </div>
          <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <label className={css.label}>
              Email:
              <input
                className="emailinput"
                type="email"
                name="email"
                placeholder="your@email.com"
                onChange={handleEmailChange}
              />
              {isEmailInvalid && (
                <span className={css.requiredSpan}>This field is required</span>
              )}
            </label>
            <label className={css.label}>
              Password:
              <input
                className="passwordinput"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              {isPasswordInvalid && (
                <span className={css.requiredSpan}>This field is required</span>
              )}
            </label>
            <div className={css.bttnsDiv}>
              <button type="submit" className={css.active}>
                LOG IN
              </button>
              <button type="button">
                <Link to="/register">REGISTER</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
