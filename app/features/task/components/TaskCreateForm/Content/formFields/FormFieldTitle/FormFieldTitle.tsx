import { useController } from 'react-hook-form'

import { FormFieldErrorMessage } from '~/components/formField/FormFieldErrorMessage'
import { FormFieldLabel } from '~/components/formField/FormFieldLabel'
import { FormFieldWrapper } from '~/components/formField/FormFieldWrapper'
import { Input } from '~/components/Input'

import { FIELD_KEY } from './const'
import { FORM_FIELD } from '../../../const'
import { useTaskCreateFormContext } from '../../useTaskCreateFormContext'

export const FormFieldTitle = () => {
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
        <Input
          type={'text'}
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
