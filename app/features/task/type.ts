import type { CustomDate, CustomDateTime } from '~/types'

export const TaskStatus = {
  todo: 'todo',
  inprogress: 'inprogress',
  completed: 'completed',
} as const
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

export type Task = {
  id: string
  created_at: CustomDateTime
  updated_at: CustomDateTime
  title: string
  description: string
  story_point: number | null
  planned_completion_date: CustomDate | null
} & (
  | {
      status: typeof TaskStatus.todo | typeof TaskStatus.inprogress
    }
  | {
      status: typeof TaskStatus.completed
      completed_at: CustomDateTime
    }
)

export type CreateTaskRequestBody = Omit<
  Task,
  'id' | 'created_at' | 'updated_at' | 'completed_at'
>

export type UpdateTaskRequestPathParams = Pick<Task, 'id'>
export type UpdateTaskRequestBody = Partial<CreateTaskRequestBody>
