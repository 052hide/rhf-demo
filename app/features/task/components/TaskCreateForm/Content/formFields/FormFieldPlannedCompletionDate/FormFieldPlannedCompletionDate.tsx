import { useController } from 'react-hook-form'

import { FormFieldErrorMessage } from '~/components/formField/FormFieldErrorMessage'
import { FormFieldLabel } from '~/components/formField/FormFieldLabel'
import { FormFieldWrapper } from '~/components/formField/FormFieldWrapper'
import { InputDate } from '~/components/InputDate'

import { FIELD_KEY } from './const'
import { FORM_FIELD } from '../../../const'
import { useTaskCreateFormContext } from '../../useTaskCreateFormContext'

export const FormFieldPlannedCompletionDate = () => {
  const {
    control,
    formState: { disabled: formDisabled },
  } = useTaskCreateFormContext()

  const {
    field: { ref: _ref, disabled: fieldDisabled, ...field },
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
      Input={<InputDate {...field} disabled={fieldDisabled || formDisabled} />}
      Error={
        <FormFieldErrorMessage message={error?.message} keepSpace={true} />
      }
    />
  )
}
