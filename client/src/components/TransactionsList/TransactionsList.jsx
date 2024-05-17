import React, { useEffect, useState } from "react";
import css from "./TransactionsList.module.css";

const TransactionsList = ({ selectedTab }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const endpoint =
        selectedTab === "income"
          ? "/transaction/income"
          : "/transaction/expense";
      try {
        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [selectedTab]);

  const handleDelete = async (transactionId) => {
    try {
      const response = await fetch(`/transaction/${transactionId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.ok) {
        setTransactions(
          transactions.filter((transaction) => transaction.id !== transactionId)
        );
      } else {
        console.error("Error deleting transaction");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const formatAmount = (amount) => {
    if (selectedTab === "expenses") {
      return amount > 0 ? `-${amount}` : amount.toString();
    }
    return amount.toString();
  };

  return (
    <section className={css.transactionsListSection}>
      <div>
        <div className={css.tableHeader}>
          <h3>DATE</h3>
          <h3>DESCRIPTION</h3>
          <h3>CATEGORY</h3>
          <h3>SUM</h3>
        </div>
        <ul className={css.transactionsList}>
          {transactions.map((transaction) => (
            <li key={transaction.id} className={css.transactionsListItem}>
              <div className={css.transactionsListMobile}>
                <p className={css.transactionsListName}>
                  {transaction.description}
                </p>
                <div className={css.transactionsListDescription}>
                  <p className={css.transactionsListDate}>{transaction.date}</p>
                  <p className={css.transactionsListType}>
                    {transaction.category}
                  </p>
                </div>
              </div>
              <div className={css.transactionsListTab}>
                <p className={css.transactionsListDate}>{transaction.date}</p>
                <p className={css.transactionsListDescription}>
                  {transaction.description}
                </p>
                <p className={css.transactionsListType}>
                  {transaction.category}
                </p>
              </div>
              <div className={css.valueWrapper}>
                <p className={css.transactionsListValue}>
                  {formatAmount(transaction.amount)} UAH
                </p>
                <button
                  className={css.deleteButton}
                  onClick={() => handleDelete(transaction.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TransactionsList;
