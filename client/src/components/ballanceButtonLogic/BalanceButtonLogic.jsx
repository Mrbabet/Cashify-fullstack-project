// import axios from 'axios';
// import PropTypes from 'prop-types';
// import css from "../Balance/Balance.module.css"

// const BalanceButton = ({ balanceValue, onUpdateBalance }) => {
//     const handleConfirm = async () => {
//         try {
//               const response = await axios.patch('/users/balance', { newBalance: balanceValue });
//                 if (response.status === 200) {
//                 onUpdateBalance();
//                 console.log('Bilans updated.');
//             }
//         } catch (error) {
//              console.error('Bilans update error.', error);
//         }
//     };
//     return (
//         <button className={css.balanceButton} onClick={handleConfirm}>CONFIRM</button>
//     );
// };

// BalanceButton.propTypes = {
//     balanceValue: PropTypes.string.isRequired,
//     onUpdateBalance: PropTypes.func.isRequired,
// };

// export default BalanceButton;
