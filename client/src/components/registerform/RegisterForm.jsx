import React, { useState } from "react";
import css from "../../components/registerform/RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const isEmailInvalid = !email && isSubmitted;
  const isPasswordInvalid = !password && isSubmitted;
  const isUsernameInvalid = !username && isSubmitted;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const registerData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(registerData));
    form.reset();
    setIsSubmitted(true);
  };

  return (
    <section className={css.registerSection}>
      <div className={css.wrapper}>
        <div className={css.logo}></div>
        <div className={css.formContainer}>
          <div className={css.paragraphDiv}>
            <p className={css.paragraph}>
              You can register with your Google Account:
            </p>
            <button className={css.googleBttn}>
              <div className={css.googlesymbol}></div>
              <span>Google</span>
            </button>
            <p className={css.paragraph}>Or fill the fields below: </p>
          </div>
          <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
            <label className={css.label}>
              Username:
              <input
                className="usernameinput"
                type="text"
                name="username"
                placeholder="Your username"
                onChange={handleUsernameChange}
              />
              {isUsernameInvalid && (
                <span className={css.requiredSpan}>This field is required</span>
              )}
            </label>
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
                REGISTER
              </button>
              <button type="button">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
