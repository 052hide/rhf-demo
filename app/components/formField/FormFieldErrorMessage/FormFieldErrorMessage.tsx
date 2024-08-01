import type { FormFieldErrorMessageProps } from './type'

export const FormFieldErrorMessage = ({
  message,
  keepSpace,
}: FormFieldErrorMessageProps) => {
  if (!message && !keepSpace) {
    return null
  }

  return (
    <p className="tw-min-h-[1.5em] tw-text-sm tw-text-red-500">{message}</p>
  )
}
