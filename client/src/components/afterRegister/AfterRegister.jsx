import React from "react";
import css from "../../components/afterRegister/AfterRegister.module.css";

const afterRegister = () => {
  return (
    <div className={css.messageWrapper}>
      <p className={css.message}>
        We have send you a verification link
        <br /> Please check your email
      </p>
    </div>
  );
};

export default afterRegister;
