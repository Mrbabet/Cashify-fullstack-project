import css from "./Transactions.module.css"

const Transactions = () => {

    return (
        <section className={css.transactionsSection}>
        <form className={css.transactionsForm}>
        
            <div className={css.transactionsInterface}>
            <img className={css.transactionsReturn} src="/src/assets/arrow.svg" alt="Arrow"></img>
            <div className={css.transactionsInputContainer}>
            <div className={css.transactionsCalendar}>
                    <img className={css.calendarIcon} src="/src/assets/calendar.svg" alt="Calendar"></img>
                    <input type="date" className={css.transactionsDate}></input>
                </div>   
            <input type="text" className={css.transactionsInput} placeholder="Product description"></input>
            <select className={css.transactionsSelect} id="category" name="category" defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled hidden>Product category</option>
                <option value="Transport">Transport</option>
                <option value="Products">Products</option>
                <option value="Health" >Health</option>
                <option value="Alcohol">Alcohol</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Housing">Housing</option>
                <option value="Technique">Technique</option>
                <option value="Communal, communication">Communal, communication"</option>
                <option value="Sports, hobbies">Sports, hobbies</option>
                <option value="Education">Education</option>
                <option value="Others">Others</option>
            </select>
            </div>
            <div className={css.transactionsCalcContainer}>
            <input type="text" className={css.transactionsCalcInput} placeholder="0.00 PLN"></input>
            <div className={css.transactionsIcon}><img src="/src/assets/calculator.svg" alt="SVG as an image"></img></div>
            </div>
            </div>
            <div className={css.transactionsActions}>
                <button className={css.transactionsActionsButton}>INPUT</button>
                <button className={css.transactionsActionsButton}>CLEAR</button>
            </div>
        </form>
        </section>
    )
}

export default Transactions;