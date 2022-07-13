import React, { useMemo, useState } from 'react';
import { useStarknetCall } from '@starknet-react/core';
import { toBN } from 'starknet/dist/utils/number';
import { Button } from '@chakra-ui/react';
import { useStarknet } from '@starknet-react/core';

export const Home = () => {
  const [watch, setWatch] = useState(true);
  const { account } = useStarknet();
  return (
    <div>
      <Button
        colorScheme='teal'
        _hover={{
          background: 'white',
          color: 'teal.500',
        }}>
        Hover me
      </Button>
      <div>{account}</div>
    </div>
  );
};
