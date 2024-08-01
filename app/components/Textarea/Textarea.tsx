import { forwardRef } from 'react'

import type { TextareaProps, TextareaRef } from './type'

const BaseTextarea = (props: TextareaProps, ref: TextareaRef) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={
        'tw-min-h-[40px] tw-rounded tw-border tw-border-gray-300 tw-px-2'
      }
    />
  )
}

export const Textarea = forwardRef(BaseTextarea)
