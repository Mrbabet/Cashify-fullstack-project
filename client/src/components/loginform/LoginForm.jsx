import React from "react";
import css from "../../components/loginform/LoginForm.module.css";
const LoginForm = () => {
  return (
    <section className={css.loginSection}>
      <div className={css.wrapper}>
        <div className={css.logo}></div>
        <div className={css.formContainer}>
          <div className={css.paragraphDiv}>
            <p className={css.paragraph}>
              You can log in with your Google Account:
            </p>
            <button className={css.googleBttn}>Google</button>
            <p className={css.paragraph}>
              Or log in using an email and password, after registering:
            </p>
          </div>
          <form className={css.form} autoComplete="off">
            <label className={css.label}>
              Email:
              <input type="email" name="email" placeholder="your@email.com" />
            </label>
            <label className={css.label}>
              Password:
              <input type="password" name="password" placeholder="Password" />
            </label>
            <div className={css.bttnsDiv}>
              <button type="submit">LOG IN</button>
              <button type="button">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
