import { z } from 'zod'

import { isValidDate } from '~/utils/date'

export const FORM_FIELD = {
  title: { label: 'タイトル' },
  description: { label: '説明' },
  story_point: { label: 'ストーリーポイント' },
  planned_completion_date: { label: '完了予定日' },
} as const

export const FORM_SCHEMA = z.object({
  title: z
    .string()
    .min(1, { message: `${FORM_FIELD.title.label}は必須です。` }),
  description: z.string(),
  story_point: z
    .string()
    .transform((v) => {
      return v === '' ? undefined : Number(v)
    })
    .pipe<z.ZodOptional<z.ZodNumber>>(
      z.optional(
        z
          .number({
            invalid_type_error: `${FORM_FIELD.story_point.label}は数値で入力してください。`,
          })
          .int({
            message: `${FORM_FIELD.story_point.label}は整数で入力してください。`,
          })
          .positive({
            message: `${FORM_FIELD.story_point.label}は正の数で入力してください。`,
          })
          .max(999, {
            message: `${FORM_FIELD.story_point.label}は999以下で入力してください。`,
          })
      )
    ),
  planned_completion_date: z
    .nullable(
      z.object({
        type: z.literal('date'),
        value: z.string().refine((v) => {
          return isValidDate(v, { isEmptyTrue: true })
        }),
      })
    )
    .transform((v) => (v === null ? undefined : v)),
})
