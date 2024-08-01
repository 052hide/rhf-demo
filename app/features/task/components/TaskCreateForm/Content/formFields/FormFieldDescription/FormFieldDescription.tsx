import { useController } from 'react-hook-form'

import { FormFieldErrorMessage } from '~/components/formField/FormFieldErrorMessage'
import { FormFieldLabel } from '~/components/formField/FormFieldLabel'
import { FormFieldWrapper } from '~/components/formField/FormFieldWrapper'
import { Textarea } from '~/components/Textarea'

import { FIELD_KEY } from './const'
import { FORM_FIELD } from '../../../const'

import { useTaskCreateFormContext } from '../../useTaskCreateFormContext'

export const FormFieldDescription = () => {
  const {
    control,
    formState: { disabled: formDisabled },
    register,
  } = useTaskCreateFormContext()

  const { disabled: fieldDisabled, ...registration } = register(FIELD_KEY)

  const {
    fieldState: { error },
  } = useController({ control, name: FIELD_KEY })

  return (
    <FormFieldWrapper
      Label={
        <FormFieldLabel
          labelKey={FIELD_KEY}
          text={FORM_FIELD[FIELD_KEY].label}
        />
      }
      Input={
        <Textarea
          rows={3}
          {...registration}
          disabled={fieldDisabled || formDisabled}
        />
      }
      Error={
        <FormFieldErrorMessage message={error?.message} keepSpace={true} />
      }
    />
  )
}
