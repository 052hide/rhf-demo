import type { InputDateProps } from './type'
import type { ComponentProps } from 'react'

export const InputDate = ({ value, onChange, ...props }: InputDateProps) => {
  const handleChange: ComponentProps<'input'>['onChange'] = (e) => {
    onChange({
      type: 'date',
      value: e.currentTarget.value,
    })
  }

  return (
    <input
      type={'date'}
      value={value ? value.value : ''}
      onChange={handleChange}
      {...props}
      className={'tw-h-[40px] tw-rounded tw-border tw-border-gray-300 tw-px-2'}
    />
  )
}
