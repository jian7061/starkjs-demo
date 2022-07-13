import React, { useMemo, useState } from 'react';
import { useStarknetCall } from '@starknet-react/core';
import { toBN } from 'starknet/dist/utils/number';
import { Button } from '@chakra-ui/react';
import { useStarknet, useConnectors } from '@starknet-react/core';

export const Home = () => {
  const [watch, setWatch] = useState(true);
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
