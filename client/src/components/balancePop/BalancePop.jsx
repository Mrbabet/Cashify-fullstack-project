import  { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import css from "./BalancePop.module.css";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const BalancePop = ({ handleClosePop }) => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
    if (isLoggedIn) {
      setShowModal(true);
    }
  }, [isLoggedIn]);

  const handleClose = () => {
    setShowModal(false);
    handleClosePop();
  };

  return (
    showModal && (
      <div className={css.popupContainer}>
        <div className={css.popup}>
          <p>Hello! To get started, enter the current balance of your account!</p>
          <p>You cant spend money until you have it.</p>
          <button onClick={handleClose}>Close</button>
        </div>
      </div>
    )
  );
};

BalancePop.propTypes = {
  handleClosePop: PropTypes.func.isRequired,
};

export default BalancePop;
