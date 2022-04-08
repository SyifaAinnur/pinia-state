<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
</script>

<template>
  <div class="container mt-5">
    <h1>Todo-List</h1>

    <div class="d-flex">
      <input type="text" class="form-control" />
      <button class="btn btn-primary">Add Todo</button>
    </div>

    <ul>
      <li v-for="todo in todos" :key="todo.title">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>