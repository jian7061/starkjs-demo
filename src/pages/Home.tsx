import React,{ useMemo, useState } from 'react';
import { useStarknetCall } from '@starknet-react/core'
import { toBN } from 'starknet/dist/utils/number'


export const Home = () => {
  const [watch, setWatch] = useState(true)

  return <div>home</div>;
};
