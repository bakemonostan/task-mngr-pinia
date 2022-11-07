import { defineStore } from 'pinia';

export const useTaskStore = defineStore('Tasks', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy soem milk', isFav: false },
      { id: 2, title: 'play Gloomhaven', isFav: true },
    ],
  }),
});
