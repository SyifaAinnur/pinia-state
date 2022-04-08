<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import { ref } from "vue-demi";

const todoStore = useTodoStore();

const { addTodo } = todoStore;

const { todos, newTodo } = storeToRefs(todoStore);
</script>

<template>
  <div class="container mt-5">
    <h1>Todo-List</h1>

    <div class="d-flex">
      <input type="text" class="form-control" v-model="newTodo" />
      <button class="btn btn-primary" @click="addTodo">Add Todo</button>
    </div>

    <ul>
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.completed" />
        <span :class="{done: todo.completed}">
            {{ todo.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}

</style>