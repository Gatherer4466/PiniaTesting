<script setup lang="ts">
import { useTaskStore, type Task } from '@/stores/taskStore'

defineProps<{ task: Task }>()
const store = useTaskStore()
</script>

<template>
  <div>
    <input type="checkbox" :checked="task.completed" @change="store.toggleTask(task.id)" />
    {{ task.title }}

    <button @click="store.removeTask(task.id)">Delete</button>
  </div>
</template>
