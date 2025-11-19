<template>
  <q-card class="q-pa-md">
    <q-card-section class="text-h6 flex col justify-between items-start q-pa-xs">
      <p>{{ title }}</p>
    </q-card-section>
    <q-card-section class="q-pa-xs">
      <p>{{ desciption }}</p>
    </q-card-section>
    <q-card-section class="row justify-between items-start q-pa-xs">
      <q-btn @click="deleteTodo" round icon="close" padding="xs" />
      <q-btn @click="deleteTodo" round icon="check" padding="xs" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  desciption: string;
  deleteTodo: () => void;
}>();
</script>
