import PropTypes from "prop-types";
import css from "./BalancePop.module.css";

const BalancePop = () => {
    return (
        <div className={css.popupContainer}>
            <div className={css.popup}>
                <p>Hello! To get started, enter the current balance of your account!</p>
                <p>You cant spend money until you have it.</p>
            </div>
        </div>
    );
};

BalancePop.propTypes = {
    handleClosePop: PropTypes.func.isRequired
};

export default BalancePop;
