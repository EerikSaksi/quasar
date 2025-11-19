<template>
  <q-list class="q-pa-lg">
    <q-list-item v-for="todo in todos" :key="todo.title + todo.description" class="q-ma-md">
      <TodoComponent title="example" desciption="Body of the todo"></TodoComponent>
    </q-list-item>
  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoComponent from 'components/TodoComponent.vue';
interface Todo {
  title: string;
  description: string;
}
const todos = ref<Todo[]>([
  { title: 'First Todo', description: 'This is the first todo item.' },
  { title: 'Second Todo', description: 'This is the second todo item.' },
]);
</script>
