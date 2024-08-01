import type { ComponentProps } from 'react'

export type TextareaProps = Omit<
  ComponentProps<'textarea'>,
  'ref' | 'className'
>
export type TextareaRef = ComponentProps<'textarea'>['ref']
