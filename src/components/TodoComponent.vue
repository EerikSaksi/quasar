<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div>{{ desciption }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  desciption: string;
}>();
</script>
