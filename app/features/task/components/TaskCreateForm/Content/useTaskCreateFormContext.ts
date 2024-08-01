import { useFormContext } from 'react-hook-form'

import type { FormInputSchema, FormOutputSchema } from '../type'

export const useTaskCreateFormContext = () => {
  return useFormContext<FormInputSchema, unknown, FormOutputSchema>()
}
