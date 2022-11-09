<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>

    <!-- Task List -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks"><TaskDetails :task="task" /></div>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from './components/TaskDetails.vue';

const taskStore = useTaskStore();
</script>

<style scoped></style>

