import type { FormFieldLabelProps } from './type'

export const FormFieldLabel = ({ labelKey, text }: FormFieldLabelProps) => {
  return (
    <label htmlFor={labelKey} className="tw-text-sm tw-font-bold">
      {text}
    </label>
  )
}
