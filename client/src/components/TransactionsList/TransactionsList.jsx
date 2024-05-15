import css from "./TransactionsList.module.css"

const TransactionsList = () => {

    return (
        <section className={css.transactionsListSection}>      
            <div>
                <div className={css.tableHeader}><h3>DATE</h3><h3>DESCRIPTION</h3><h3>CATEGORY</h3><h3>SUM</h3></div>
                <ul className={css.transactionsList}>
                <li className={css.transactionsListItem}>
                        <div className={css.transactionsListMobile}>
                            <p className={css.transactionsListName}>Underground</p>
                            <div className={css.transactionsListDescription}>
                                <p className={css.transactionsListDate}>21.11.2019</p>
                                <p className={css.transactionsListType}>Transport</p>
                            </div>
                        </div>
                        <div className={css.transactionsListTab}>
                            <p className={css.transactionsListDate}>21.04.2019</p>
                            <p className={css.transactionsListDescription}>Underground</p>
                            <p className={css.transactionsListType}>Transport</p>
                        </div>
                        <div className={css.valueWrapper}>
                        <p className={css.transactionsListValue}>-30.00 UAH</p>
                        <button className={css.deleteButton}></button>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default TransactionsList;