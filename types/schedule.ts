export type ViewType = "week" | "month"



export type FilterType = "project" | "staff" | "vehicle"

export interface Task {
  id: string
  name: string
  type: "construction" | "installation" | "planning" | "maintenance" | "milestone"
  startDate: string
  endDate: string
  assignedTo?: string[]
  vehicles?: string[]
}

export interface Project {
  id: string
  name: string
  company: string
  tasks: Task[]
}