import type { FORM_SCHEMA } from './const'
import type { z } from 'zod'

export type FormInputSchema = z.input<typeof FORM_SCHEMA>
export type FormOutputSchema = z.output<typeof FORM_SCHEMA>
