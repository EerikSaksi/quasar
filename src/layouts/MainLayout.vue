<template>
  <q-layout class="flex flex-center" style="height: 100vh">
    <q-list class="q-pa-lg">
      <q-list-item class="flex row items-center">
        <q-input :borderless="false" v-model="newTodo" label="New Todo" class="q-pa-md" />
        <q-btn
          @click="
            fetch();
            todos.push({ title: newTodo, id: id++ });
            await fetch();
            newTodo = '';
          "
          class="q-pa-md"
          round
          icon="add"
          padding="xs"
        />
      </q-list-item>
      <q-list-item v-for="todo in todos" :key="todo.id" class="q-ma-md">
        <TodoComponent
          :i="todo.id"
          :title="todo.title"
          :delete-todo="
            () => {
              todos = todos.filter((t) => t.id !== todo.id);
            }
          "
          @todo-complete="
            ({ title }) => {
              completed.push({ id: todo.id, title: title });
              todos = todos.filter((t) => t.id !== todo.id);
            }
          "
        />
      </q-list-item>
      <q-btn-dropdown class="q-pa-md">
        <template v-slot:label>Completed Todos ({{ completed.length }}) </template>
        <q-list>
          <q-item v-for="todo in completed" clickable v-close-popup :key="todo.id">
            <q-item-label>{{ todo.title }}</q-item-label>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-list>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TodoComponent from 'components/TodoComponent.vue';
interface Todo {
  title: string;
  id: number;
}
const todos = ref<Todo[]>([
  { title: 'Sample Todo', id: 0 },
  { title: 'Another Todo', id: 1 },
]);
const completed = ref<Todo[]>([]);
const newTodo = ref('');
const id = ref(2);

// 1. Create reactive variables
const data = ref(null);
const error = ref<Error | null>(null);
const loading = ref(true);

// 2. Define the fetching function
const fetchData = async () => {
  const response = await fetch('https://xzoyjysawi.execute-api.us-east-1.amazonaws.com/todo');

  // Parse JSON and assign to data
  data.value = await response.json();
};
onMounted(async () => {
  try {
    await fetchData();
  } catch (err) {
    error.value = err as Error;
  } finally {
    loading.value = false;
  }
});
</script>
