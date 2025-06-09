<template>
  <div class="dashboard-container">
    <!-- 고정 사이드바 -->
    <Sidebar />

    <!-- 본문 영역 -->
    <div class="main-content">

      <!-- Welcome Section -->
      <section class="welcome-section">
        <h1>Good morning</h1>
        <p>Welcome to TestOps Dashboard - Monitor your test execution results in real-time</p>
      </section>

      <!-- 상단 2개 카드 컨테이너 -->
      <div class="cards-container">
        
        <!-- 왼쪽 카드: Remote Execution Runs -->
        <div class="card">
          <div class="card-header">
            <h3>REMOTE EXECUTION RUNS</h3>
            <p>(1,795 TOTAL)</p>
          </div>
          
          <div class="chart-section">
            <!-- 도넛 차트 -->
            <div class="donut-chart">
              <div class="chart-inner"></div>
            </div>
            
            <!-- 통계 -->
            <div class="stats">
              <div class="stat-item passed">
                <div class="stat-label">PASSED</div>
                <div class="stat-number">169</div>
              </div>
              <div class="stat-item failed">
                <div class="stat-label">FAILED</div>
                <div class="stat-number">96</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 오른쪽 카드: Failed Remote Executions -->
        <div class="card">
          <div class="card-header-with-tag">
            <div>
              <h3>FAILED REMOTE EXECUTIONS</h3>
              <p>(96 TOTAL)</p>
            </div>
            <span class="tag">LAST 7 DAYS</span>
          </div>
          
          <div class="failed-items">
            <div class="failed-item">
              <h4>small res UI Test Save Delete</h4>
              <p>1 Test: Element is not visible - opacity is too low</p>
            </div>
            
            <div class="failed-item">
              <h4>ui-test rec-test</h4>
              <p>1 Test: Error while running step. Error: Loop HTML param result assertion missing</p>
            </div>
            
            <div class="failed-item">
              <h4>ui-test rec-test</h4>
              <p>1 Test: Error while running step. Error: Loop HTML param result assertion missing</p>
            </div>
          </div>
          
          <button class="see-all-btn">See all</button>
        </div>
      </div>

      <!-- Test Overview -->
      <section class="test-overview">
        <div class="overview-header">
          <h2>TEST OVERVIEW</h2>
          <span>(798 TOTAL)</span>
        </div>

        <div class="overview-cards">
          <div v-for="(status, i) in statusCards" :key="i" class="overview-card">
            <div class="overview-card-top">
              <div class="icon" :class="status.bgColor">
                {{ status.symbol }}
              </div>
            </div>
            <div class="overview-card-bottom">
              <span class="label">{{ status.label }}</span>
              <span class="count">{{ status.count }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'

const statusCards = [
  { symbol: '✓', label: 'ACTIVE', count: 240, bgColor: 'bg-green' },
  { symbol: '⚠', label: 'QUARANTINE', count: 3, bgColor: 'bg-red' },
  { symbol: '📋', label: 'EVALUATING', count: 18, bgColor: 'bg-yellow' },
  { symbol: '📄', label: 'DRAFT', count: 537, bgColor: 'bg-blue' },
  { symbol: '⚡', label: 'FLAKY', count: 61, bgColor: 'bg-orange' },
]
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  background-color: #f9fafb;
}

.main-content {
  margin-left: 80px;
  padding: 24px;
}

.welcome-section {
  margin-bottom: 24px;
}

.welcome-section h1 {
  font-size: 24px;
  font-weight: bold;
  color: #374151;
  margin-bottom: 4px;
}

.welcome-section p {
  color: #6b7280;
  font-size: 14px;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
}

.card {
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.card-header h3 {
  font-size: 12px;
  font-weight: bold;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.card-header p {
  font-size: 10px;
  color: #9ca3af;
}

.card-header-with-tag {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.card-header-with-tag h3 {
  font-size: 12px;
  font-weight: bold;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.card-header-with-tag p {
  font-size: 10px;
  color: #9ca3af;
}

.tag {
  font-size: 10px;
  color: #6b7280;
  background-color: #f3f4f6;
  padding: 4px 8px;
  border-radius: 4px;
}

.chart-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
}

.donut-chart {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: conic-gradient(#10b981 0deg 230deg, #ef4444 230deg 360deg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-inner {
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 50%;
}

.stats {
  text-align: right;
}

.stat-item {
  margin-bottom: 16px;
}

.stat-item.passed .stat-label {
  color: #10b981;
  font-size: 12px;
  font-weight: 500;
}

.stat-item.passed .stat-number {
  color: #10b981;
  font-size: 24px;
  font-weight: bold;
}

.stat-item.failed .stat-label {
  color: #ef4444;
  font-size: 12px;
  font-weight: 500;
}

.stat-item.failed .stat-number {
  color: #ef4444;
  font-size: 24px;
  font-weight: bold;
}

.failed-items {
  margin-bottom: 16px;
}

.failed-item {
  padding: 12px;
  background-color: #fef2f2;
  border-left: 4px solid #f87171;
  border-radius: 0 4px 4px 0;
  margin-bottom: 12px;
}

.failed-item h4 {
  font-weight: 600;
  color: #1f2937;
  font-size: 14px;
  margin-bottom: 4px;
}

.failed-item p {
  font-size: 12px;
  color: #dc2626;
}

.see-all-btn {
  color: #3b82f6;
  font-size: 14px;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}

.test-overview {
  margin-top: 32px;
}

.overview-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.overview-header h2 {
  font-size: 12px;
  font-weight: bold;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.overview-header span {
  font-size: 10px;
  color: #9ca3af;
}

.overview-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.overview-card {
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 16px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.overview-card-top {
  display: flex;
  justify-content: flex-start;
}

.icon {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.bg-green { background-color: #10b981; }
.bg-red { background-color: #ef4444; }
.bg-yellow { background-color: #f59e0b; }
.bg-blue { background-color: #3b82f6; }
.bg-orange { background-color: #f97316; }

.overview-card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.label {
  font-size: 10px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.count {
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
}
</style>