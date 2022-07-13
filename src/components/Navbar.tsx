import React, { useState, useEffect } from 'react';
import { Link, Box, Flex, Text, Button, Stack } from '@chakra-ui/react';
import { useStarknet, useConnectors } from '@starknet-react/core';

export const Navbar = (): JSX.Element => {
  const { account } = useStarknet();
  const { available, connect, disconnect } = useConnectors();

  return (
    <div>
      {account ? (
        <Flex>
          <p>Account: {account}</p>
          <Button onClick={() => disconnect()}>Disconnect</Button>
        </Flex>
      ) : (
        <div>
          {available.map((connector) => (
            <Button key={connector.id()} onClick={() => connect(connector)}>
              {`Connect ${connector.name()}`}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
