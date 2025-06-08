<template>
  <div>
    <Sidebar />
    <div style="margin-left: 80px;">
      <Header></Header>
      <main class="bg-light" style="min-height: 100vh; width: 100%;">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
</script>
