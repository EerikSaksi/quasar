<template>
  <q-layout class="flex flex-center" style="height: 100vh">
    <q-list class="q-pa-lg">
      <q-list-item class="flex row items-center">
        <q-input :borderless="false" v-model="newTodo" label="New Todo" class="q-pa-md" />
        <q-btn
          class="q-pa-md"
          round
          icon="add"
          padding="xs"
          @click="
            todos.push({ title: newTodo, description: 'No description' });
            newTodo = '';
          "
        />
      </q-list-item>
      <q-list-item v-for="(todo, i) in todos" :key="todo.title + todo.description" class="q-ma-md">
        <TodoComponent
          :title="todo.title"
          :desciption="todo.description"
          :delete-todo="
            () => {
              todos = todos.filter((_, index) => index !== i);
            }
          "
        />
      </q-list-item>
    </q-list>
  </q-layout>
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

const newTodo = ref('');
</script>
