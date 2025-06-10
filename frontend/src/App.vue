<template>
  <div>
    <Sidebar />
    <div style="margin-left: 80px">
      <Header></Header>
      <main
        class="bg-light"
        style="min-height: calc(100vh - 60px)"
      >
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
</script>

<style>
/* Bootstrap 오버라이드: 불필요한 스크롤바 제거 */
html {
  overflow-y: auto !important;
}

body {
  overflow-y: auto !important;
  overflow-x: hidden !important;
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
</style>