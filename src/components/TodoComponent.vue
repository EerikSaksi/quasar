<template>
  <q-card class="q-pa-md">
    <q-card-section class="text-h6 flex col justify-between items-start q-pa-xs">
      <q-input v-model="input" />
    </q-card-section>
    <q-card-section v-if="deleteTodo" class="row justify-between items-start q-pa-xs">
      <q-btn @click="deleteTodo" round icon="close" padding="xs" />
      <q-btn @click="$emit('todo-complete', { title: input })" round icon="check" padding="xs" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface EmitProps {
  title: string;
}

const props = defineProps<{
  title: string;
  deleteTodo?: () => void;
  i: number;
}>();
defineEmits<{
  (e: 'todo-complete', value: EmitProps): void;
}>();

const input = ref(props.title);
</script>
