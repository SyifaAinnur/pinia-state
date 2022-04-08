<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore();

console.log(counterStore.counter);
console.log(counterStore.doubleCount);

counterStore.increment();



</script>

<template>
  <main class="container mt-t">
    <h1>Counter</h1>

    <h2>Count : {{ counterStore.counter }}</h2>

    <h2>Double Count : {{ counterStore.doubleCount }}</h2>

    <button class="btn btn-primary" @click="counterStore.increment">
      Increment
    </button>
    <button class="btn btn-primary" @click="counterStore.decrement">
      Decrement
    </button>
  </main>
</template>
