import { clsx } from 'clsx'

import type { MetaFunction } from '@remix-run/node'

import { TaskCreateForm } from '~/features/task/components/TaskCreateForm'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className={clsx('tw-flex tw-flex-col tw-gap-4')}>
      <TaskCreateForm />
    </div>
  )
}
