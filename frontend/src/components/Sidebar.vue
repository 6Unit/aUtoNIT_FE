<template>
  <aside
    class="d-flex flex-column align-items-center bg-white border-end py-4"
    style="
      width: 80px;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
    "
  >


    <RouterLink to="/" class="text-center text-muted small mb-4 text-decoration-none">
        <div>🏠</div>
        <div>Home</div>
      </RouterLink>

    <RouterLink to="/upload" class="text-center text-muted small mb-4 text-decoration-none">
      <div>📁</div>
      <div>Upload</div>
    </RouterLink>
    <RouterLink to="/generation" class="text-center text-muted small mb-4 text-decoration-none">
      <div>🌍</div>
      <div>Generation</div>
    </RouterLink>
    <RouterLink to="/report" class="text-center text-muted small mb-4 text-decoration-none">
      <div>🖥️</div>
      <div>Report</div>
    </RouterLink>
  </aside>
</template>
