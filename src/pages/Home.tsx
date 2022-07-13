import React, { useMemo, useState } from 'react';
import { toBN } from 'starknet/dist/utils/number';
import { Button } from '@chakra-ui/react';
import {
  StarknetProvider,
  useContract,
  useStarknetBlock,
  useStarknetCall,
  useStarknetInvoke,
  useStarknetTransactionManager,
  Transaction,
  useStarknet,
  useConnectors,
  getInstalledInjectedConnectors,
} from '@starknet-react/core';
import { useExampleContract } from '../hooks';

const Account = () => {
  const { account } = useStarknet();
  const { available, connect, disconnect } = useConnectors();
  if (account) {
    return (
      <div>
        <p>Account: {account}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }

  return (
    <div>
      {available.map((connector) => (
        <button key={connector.id()} onClick={() => connect(connector)}>
          {`Connect ${connector.name()}`}
        </button>
      ))}
    </div>
  );
};

const Block = () => {
  const { data: block, error } = useStarknetBlock();

  const timestamp = useMemo(() => {
    if (!block?.timestamp) {
      return '';
    }

    // block.timestamp is supposed to be a number, but it's
    // a bigint. Convert back to number.
    const timestamp = Number(block.timestamp);
    return new Date(timestamp * 1000).toLocaleString();
  }, [block?.timestamp]);

  return (
    <div>
      {block ? (
        <div>
          <p>Block Hash: {block.block_hash}</p>
          <p>Block Timestamp: {timestamp}</p>
        </div>
      ) : error ? (
        <p>'Error loading block data'</p>
      ) : (
        <p>'Loading'</p>
      )}
    </div>
  );
};

const ContractCall = () => {
  const { contract } = useExampleContract();
  const { data: counter, error } = useStarknetCall({
    contract,
    method: 'counter',
    args: [],
  });
  return (
    <div>
      {counter ? (
        <div>
          <p>Counter Value: {toBN(counter[0]).toString()}</p>
        </div>
      ) : error ? (
        <p>'Error loading counter'</p>
      ) : (
        <p>'Loading'</p>
      )}
    </div>
  );
};

const ContractInvoke = () => {
  const { contract } = useExampleContract();
  // Use type parameter to enforce type and number of arguments
  const { data, loading, error, reset, invoke } = useStarknetInvoke<[string]>({
    contract,
    method: 'incrementCounter',
  });
  return (
    <div>
      <div>
        {data && (
          <div>
            <p>Transaction Hash: {data}</p>
          </div>
        )}
      </div>
      <div>
        <p>Submitting: {loading ? 'Submitting' : 'Not Submitting'}</p>
        <p>Error: {error || 'No error'}</p>
      </div>
      <div>
        <Button onClick={() => invoke({ args: ['0x1'] })}>Invoke Method</Button>
        <Button onClick={() => reset()}>Reset State</Button>
      </div>
    </div>
  );
};

function TransactionItem({ transaction, onClick }: { transaction: Transaction; onClick: () => void }) {
  return (
    <div>
      {transaction.status}: {transaction.transactionHash} <button onClick={onClick}>remove</button>
    </div>
  );
}

const TransactionManager = () => {
  const { transactions, removeTransaction } = useStarknetTransactionManager();
  return (
    <div>
      {transactions.length === 0
        ? 'No transactions'
        : transactions.map((tx, index) => (
            <TransactionItem key={index} transaction={tx} onClick={() => removeTransaction(tx.transactionHash)} />
          ))}
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <Account />
      <Block />
      <ContractCall />
      <ContractInvoke />
      <TransactionManager />
    </div>
  );
};
