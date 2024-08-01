import { forwardRef } from 'react'

import type { ButtonProps, ButtonRef } from './type'

const BaseButton = ({ children, ...props }: ButtonProps, ref: ButtonRef) => {
  return (
    <button
      {...props}
      ref={ref}
      className={
        'tw-block tw-min-h-[40px] tw-w-full tw-rounded tw-bg-indigo-500 tw-px-4 tw-py-2 tw-text-white'
      }
    >
      {children}
    </button>
  )
}

export const Button = forwardRef(BaseButton)
