import React from 'react';
import { Transaction, useStarknetTransactionManager } from '@starknet-react/core';

function TransactionItem({ transaction }: { transaction: Transaction }) {
  return (
    <span>
      <a href={`https://goerli.voyager.online/tx/${transaction.transactionHash}`}>
        {transaction.metadata.method}: {transaction.metadata.message} - {transaction.status}
      </a>
    </span>
  );
}

export const TransactionList = () => {
  const { transactions } = useStarknetTransactionManager();
  return (
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>
          <TransactionItem transaction={transaction} />
        </li>
      ))}
    </ul>
  );
};
