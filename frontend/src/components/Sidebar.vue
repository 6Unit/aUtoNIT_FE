<template>
  <aside class="sidebar">
    <RouterLink 
      to="/home" 
      class="nav-item"
      exact-active-class="active"
    >
      <div class="nav-icon">
        <img :src="homeIcon" alt="Home" class="icon-image" />
      </div>
      <div class="nav-text">Home</div>
    </RouterLink>

    <RouterLink 
      to="/upload" 
      class="nav-item"
      active-class="active"
    >
      <div class="nav-icon">
        <img :src="uploadIcon" alt="Upload" class="icon-image" />
      </div>
      <div class="nav-text">Upload</div>
    </RouterLink>

    <RouterLink 
      to="/generation" 
      class="nav-item"
      active-class="active"
    >
      <div class="nav-icon">
        <img :src="generationIcon" alt="Generation" class="icon-image" />
      </div>
      <div class="nav-text">Generation</div>
    </RouterLink>

    <RouterLink 
      to="/testpage" 
      class="nav-item"
      active-class="active"
    >
      <div class="nav-icon">
        <img :src="testpageIcon" alt="TestPage" class="icon-image" />
      </div>
      <div class="nav-text">TestPage</div>
    </RouterLink>

    <RouterLink 
      to="/report" 
      class="nav-item"
      active-class="active"
    >
      <div class="nav-icon">
        <img :src="reportIcon" alt="Report" class="icon-image" />
      </div>
      <div class="nav-text">Report</div>
    </RouterLink>

    <div class="logout-section">
      <button class="logout-button" @click="logout">로그아웃</button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import '../assets/styles/sidebar.css'

// 이미지 파일들을 import
import homeIcon from '../assets/icons/home.png'
import uploadIcon from '../assets/icons/upload.png'
import generationIcon from '../assets/icons/generation.png'
import testpageIcon from '../assets/icons/testpage.png'
import reportIcon from '../assets/icons/report.png'

const router = useRouter()

function logout() {
  router.push('/')
}
</script>

<style scoped>
.icon-image {
  width: 28px;  /* 24px → 28px로 변경 */
  height: 28px; /* 24px → 28px로 변경 */
  object-fit: contain;
}

/* 활성 상태일 때 아이콘 스타일 */
.nav-item.active .icon-image {
  filter: brightness(1.2);
}

/* 호버 효과 */
.nav-item:hover .icon-image {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
</style>