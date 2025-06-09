<template>
  <aside
    class="sidebar"
  >
    <RouterLink 
      to="/" 
      class="nav-item"
      exact-active-class="active"
    >
      <div class="nav-icon">🏠</div>
      <div class="nav-text">Home</div>
    </RouterLink>

    <RouterLink 
      to="/upload" 
      class="nav-item"
      active-class="active"
    >
      <div class="nav-icon">📁</div>
      <div class="nav-text">Upload</div>
    </RouterLink>

    <RouterLink 
      to="/generation" 
      class="nav-item"
      active-class="active"
    >
      <div class="nav-icon">🌍</div>
      <div class="nav-text">Generation</div>
    </RouterLink>

    <RouterLink 
      to="/testpage" 
      class="nav-item"
      active-class="active"
    >
      <div class="nav-icon">🧪</div>
      <div class="nav-text">TestPage</div>
    </RouterLink>

    <RouterLink 
      to="/report" 
      class="nav-item"
      active-class="active"
    >
      <div class="nav-icon">🖥️</div>
      <div class="nav-text">Report</div>
    </RouterLink>
  </aside>
</template>
<script setup lang="ts">
import '../assets/styles/sidebar.css'
</script>
