<script setup lang="ts">
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
import TaskStats from './components/TaskStats.vue'
</script>

<template>
  <h1>Task Dashboard</h1>
  <TaskInput />
  <TaskStats />
  <TaskList />
</template>
