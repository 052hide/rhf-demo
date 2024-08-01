import type { FormOutputSchema } from '../type'

import { Button } from '~/components/Button'

import {
  FormFieldDescription,
  FormFieldPlannedCompletionDate,
  FormFieldStoryPoint,
  FormFieldTitle,
} from './formFields'
import { useTaskCreateFormContext } from './useTaskCreateFormContext'

export const Content = () => {
  const { handleSubmit } = useTaskCreateFormContext()

  const submitHandler = (d: FormOutputSchema) => {
    console.log(d)
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <FormFieldTitle />
      <FormFieldDescription />
      <FormFieldStoryPoint />
      <FormFieldPlannedCompletionDate />

      <Button type={'submit'}>{'submit'}</Button>
    </form>
  )
}
