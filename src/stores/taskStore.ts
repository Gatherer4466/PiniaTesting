import { defineStore } from 'pinia'

export type Task = {
  id: number
  title: string
  completed: boolean
}

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
    nextId: 1,
  }),
  getters: {
    completedTasks(state) {
      return state.tasks.filter((t) => t.completed)
    },
    pendingTasks(state) {
      return state.tasks.filter((t) => !t.completed)
    },
    totalTasks(state) {
      return state.tasks.length
    },
  },

  actions: {
    addTask(title: string) {
      this.tasks.push({ title, id: this.nextId++, completed: false })
    },

    toggleTask(id: number) {
      const task = this.tasks.find((t) => t.id == id)
      if (task) task.completed = !task.completed
    },

    removeTask(id: number) {
      this.tasks = this.tasks.filter((t) => t.id != id)
    },
  },
})
