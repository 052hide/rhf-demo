import type { ComponentProps } from 'react'

import type { CustomDate } from '~/types'

export type InputDateProps = Omit<
  ComponentProps<'input'>,
  'value' | 'onChange' | 'type' | 'className' | 'ref'
> & {
  value: CustomDate | null
  onChange: (v: CustomDate | null) => void
}
