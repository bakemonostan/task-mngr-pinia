<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
    </header>
    <!-- Filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All</button>
      <button @click="filter = 'favs'">Fav</button>
    </nav>
    <!-- Task List -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <p>All tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} favs left to do</p>
      <p>Favorite tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from './components/TaskDetails.vue';
import { ref } from 'vue';

const taskStore = useTaskStore();
const filter = ref('all');
</script>

<style scoped></style>

