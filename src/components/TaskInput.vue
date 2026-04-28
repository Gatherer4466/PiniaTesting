<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const store = useTaskStore()
const input = ref('')

function add() {
  store.addTask(input.value)
  input.value = ''
}
</script>

<template>
  <input v-model="input" placeholder="New task" />
  <button @click="add">Add</button>
</template>
