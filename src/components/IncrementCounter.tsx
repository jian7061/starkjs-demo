import React from 'react'
import { useStarknet, useStarknetInvoke } from '@starknet-react/core'
import { useCounterContract } from '../hooks/useCounterContract'

export function IncrementCounter() {
  const { account } = useStarknet()
  const { contract: counter } = useCounterContract()
  const { invoke } = useStarknetInvoke({ contract: counter, method: 'incrementCounter' })

  if (!account) {
    return null
  }

  return (
    <div>
      <button
        onClick={() =>
          invoke({
            args: ['0x1'],
            metadata: { method: 'incrementCounter', message: 'increment counter by 1' },
          })
        }
      >
        Increment Counter by 1
      </button>
    </div>
  )
}
