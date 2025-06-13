<template>
  <div class="app-container">
    <!-- 로그인 페이지일 땐 Sidebar/Header 제거 -->
    <Sidebar v-if="showLayout" />
    <div v-if="showLayout" class="main-content">
      <Header />
      <main class="bg-light" style="min-height: calc(100vh - 60px)">
        <RouterView />
      </main>
    </div>
    <div v-else class="login-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Sidebar from "./components/Sidebar.vue"
import Header from "./components/Header.vue"

const route = useRoute()
const showLayout = computed(() => route.path !== '/')
</script>

<style>
html {
  overflow-y: auto !important;
  width: 100%;
  margin: 0;
  padding: 0;
}

body {
  overflow-y: auto !important;
  overflow-x: hidden !important;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* 메인 컨테이너 스크롤 설정 */
main {
  overflow-y: auto !important;
  overflow-x: hidden !important;
}

/* 전체 앱 컨테이너 */
#app {
  overflow-x: hidden !important;
}

.app-container {
  display: flex;
  width: 100vw;
  min-height: 100vh;
}

/* 메인 콘텐츠 영역 - flexbox 사용 */
.main-content {
  flex: 1;
  min-height: 100vh;
  overflow-x: hidden;
}

.login-content {
  width: 100%;
}

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }
  
  .main-content {
    margin-bottom: 70px;
  }
}
</style>