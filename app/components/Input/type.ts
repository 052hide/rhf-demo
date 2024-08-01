import type { ComponentProps } from 'react'

export type InputProps = Omit<ComponentProps<'input'>, 'ref' | 'className'>
export type InputRef = ComponentProps<'input'>['ref']
