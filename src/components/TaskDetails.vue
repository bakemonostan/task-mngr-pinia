<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorites</i>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['task']);
</script>
