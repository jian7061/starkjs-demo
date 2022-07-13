import { useContract } from '@starknet-react/core';
import { Abi } from 'starknet';

import { EXAMPLE_ABI } from '../ABIs';
import { EXAMPLE_ADDRESS } from '../constants';

export function useExampleContract() {
  return useContract({
    abi: EXAMPLE_ABI as Abi,
    address: EXAMPLE_ADDRESS,
  });
}
