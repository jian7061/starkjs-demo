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
} from '@starknet-react/core'

export const Home = () => {
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
