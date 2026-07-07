import type { TaskPriority, TaskStatus } from '@/types'

export interface CreateTaskInput {
  title: string
  description?: string
  status?: TaskStatus
  priority?: TaskPriority
  assigneeId?: string
  dueDate?: string
}

export interface UpdateTaskInput extends Partial<CreateTaskInput> {}
