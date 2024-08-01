import type { ComponentProps } from 'react'

export type ButtonProps = Omit<ComponentProps<'button'>, 'ref' | 'className'>
export type ButtonRef = ComponentProps<'button'>['ref']
