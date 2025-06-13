<template>
    <header class="d-flex align-items-center px-4 py-3 border-bottom bg-white" style="height: 60px;">
      <h3 class="fw-bold text-primary m-0">aUtoNIT</h3>
      <span class="mx-2 text-muted">&gt;</span>
      <span class="fw-semibold text-secondary">{{ projectName }}</span>
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  const projectName = ref('')

  onMounted(() => {
    projectName.value = localStorage.getItem('projectName') || '프로젝트 이름 없음'
  })
  
  </script>
  