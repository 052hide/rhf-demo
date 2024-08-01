import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import type { FormInputSchema, FormOutputSchema } from './type'

import { FORM_SCHEMA } from './const'
import { Content } from './Content'

export const TaskCreateForm = () => {
  const methods = useForm<FormInputSchema, unknown, FormOutputSchema>({
    resolver: zodResolver(FORM_SCHEMA),
    defaultValues: {
      title: '',
      description: '',
      story_point: '',
      planned_completion_date: null,
    } satisfies FormInputSchema,
  })

  return (
    <FormProvider {...methods}>
      <Content />
    </FormProvider>
  )
}
