// import { useState } from 'react';
import css from "./Balance.module.css";
import BalancePop from "../balancePop/BalancePop.jsx";
// import BalanceButton from '../ballanceButtonLogic/BalanceButtonLogic.jsx';

const Balance = () => {
    /*const [balanceValue, setBalanceValue] = useState('0.00');
    
    const handleUpdateBalance = () => {
        console.log('balance updated.');
    };

    const handleBalanceChange = (event) => {
        setBalanceValue(event.target.value);  
    }; */

    // LOGIKA WYMAGA TYLKO PODPIĘCIA DO BUTTONA


    return (
        <section className={css.balanceSection}>
            <div className={css.homeLayout}>
            <div className={css.dataContainer}>
                <button className={css.returnButton}><div className={css.iconArrow}></div>TO TRANSACTION</button>
                <div className={css.reportsWrapper}>
                <a href="/reports" className={css.reportsText}><span>Reports</span><img src="/src/assets/bar_chart.svg" alt="SVG as an image"></img></a>
                </div>
                <form className={css.balanceForm}>
                <h3 className={css.balanceTitle}>Balance:</h3>
                <div className={css.balanceInfo}>
                    <input type="text" className={css.balanceValue } placeholder="0.00 PLN"></input>
                    <button className={css.balanceButton }>CONFIRM</button>
                </div>
                </form>
            </div>   
            </div>  
            {<BalancePop  />}  
        </section>
    )
}

export default Balance;