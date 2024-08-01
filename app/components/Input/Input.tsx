import { forwardRef } from 'react'

import type { InputProps, InputRef } from './type'

const BaseInput = (props: InputProps, ref: InputRef) => {
  return (
    <input
      {...props}
      ref={ref}
      className={'tw-h-[40px] tw-rounded tw-border tw-border-gray-300 tw-px-2'}
    />
  )
}

export const Input = forwardRef(BaseInput)
