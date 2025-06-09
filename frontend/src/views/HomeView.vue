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
import '../assets/styles/homeview.css'

const statusCards = [
  { symbol: '✓', label: 'ACTIVE', count: 240, bgColor: 'bg-green' },
  { symbol: '⚠', label: 'QUARANTINE', count: 3, bgColor: 'bg-red' },
  { symbol: '📋', label: 'EVALUATING', count: 18, bgColor: 'bg-yellow' },
  { symbol: '📄', label: 'DRAFT', count: 537, bgColor: 'bg-blue' },
  { symbol: '⚡', label: 'FLAKY', count: 61, bgColor: 'bg-orange' },
]
</script>