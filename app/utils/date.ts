import { isValid, isDate } from 'date-fns'

export const isValidDate = (v: string, options?: { isEmptyTrue: boolean }) => {
  if (v === '') {
    return !!options?.isEmptyTrue
  }

  const date = new Date(v)
  if (!isValid(date)) {
    return false
  }

  return isDate(date)
}
