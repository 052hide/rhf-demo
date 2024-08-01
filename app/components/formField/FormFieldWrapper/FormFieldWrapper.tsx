import type { FormFieldWrapperProps } from './type'

export const FormFieldWrapper = ({
  Label,
  Input,
  Error,
}: FormFieldWrapperProps) => {
  return (
    <div className={'tw-flex tw-flex-col tw-gap-1'}>
      {Label}
      {Input}
      {Error}
    </div>
  )
}
