import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [
            {
                title: 'Learn pinia',
                completed: false
            },
        ],
        newTodo: '',

    }),
    actions : {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                completed: false
            });
            this.newTodo = '';
        }
    }
});