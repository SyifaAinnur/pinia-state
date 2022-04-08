import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {
                title: 'Learn pinia',
                completed: false
            },
        ],
    }),
});