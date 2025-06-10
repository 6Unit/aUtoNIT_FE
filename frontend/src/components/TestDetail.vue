.log-content {
  max-height: 400px;
  overflow-y: auto;
}

.log-line {
  border-left: 3px solid transparent;
  padding-left: 8px;
  transition: all 0.2s ease;
}

.log-line:hover {
  background-color: #e9ecef;
  border-left-color: #6c757d;
}

.log-timestamp {
  font-size: 11px;
  user-select: none;
}

.card-header {
  border-bottom: 1px solid #dee2e6;
  background-color: #f8f9fa !important;
}<template>
  <div class="pt-2">
    <div
      v-for="scenario in scenarioList"
      :key="scenario.id"
      class="mb-4 border rounded-lg shadow-sm"
    >
      <!-- 시나리오 제목 + 전체선택 체크박스 -->
      <div
        class="d-flex justify-content-between align-items-center px-3 py-3 bg-light fw-semibold border-bottom"
        @click="toggle(scenario.id)"
        style="cursor: pointer;"
      >
        <div class="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            :checked="isAllSelected(scenario)"
            @change="toggleScenarioAll($event, scenario)"
            @click.stop
            class="form-check-input"
          />
          <span style="font-size: 16px; font-weight: 600;">📄 {{ scenario.name }}</span>
          <div class="d-flex gap-2 ms-3">
            <span class="badge bg-primary" style="font-size: 12px; padding: 4px 8px;">
              총 {{ scenario.testCases.length }}개
            </span>
            <span 
              v-if="getScenarioProgress(scenario).total > 0"
              class="badge bg-success" 
              style="font-size: 12px; padding: 4px 8px;"
            >
              완료 {{ getScenarioProgress(scenario).completed }}/{{ getScenarioProgress(scenario).total }}
            </span>
          </div>
        </div>
        <div style="color: #666; font-size: 18px;">
          {{ isExpanded(scenario.id) ? "▼" : "▶" }}
        </div>
      </div>

      <!-- 테스트 케이스 목록 -->
      <div
        v-show="isExpanded(scenario.id)"
        class="bg-white"
      >
        <div
          v-for="(tc, index) in scenario.testCases"
          :key="tc.id"
          class="border-bottom"
          :class="{ 'border-top': index === 0 }"
        >
          <!-- 테스트케이스 기본 정보 -->
          <div class="d-flex align-items-center gap-3 px-4 py-3">
            <input
              type="checkbox"
              :value="tc"
              :checked="isChecked(scenario.id, tc)"
              @change="toggleSingleTestCase($event, scenario.id, tc)"
              class="form-check-input"
            />
            <span
              class="badge rounded-pill fw-bold"
              style="background-color: #e3f2fd; color: #1565c0; min-width: 30px;"
            >
              {{ index + 1 }}
            </span>
            <div class="flex-grow-1">
              <span class="text-dark fw-medium">{{ tc.name }}</span>
            </div>
            
            <!-- 테스트 실행 상태 -->
            <div class="test-status-container">
              <div v-if="getTestResult(scenario.id, tc.id)" class="d-flex align-items-center gap-2">
                <span 
                  class="badge"
                  :class="getStatusBadgeClass(getTestResult(scenario.id, tc.id).status)"
                >
                  {{ getStatusText(getTestResult(scenario.id, tc.id).status) }}
                </span>
                <span class="text-muted small">
                  {{ getTestResult(scenario.id, tc.id).duration }}ms
                </span>
                <button
                  class="btn btn-sm btn-outline-secondary"
                  @click="toggleTestLog(scenario.id, tc.id)"
                  style="font-size: 12px; padding: 2px 8px;"
                >
                  {{ isLogExpanded(scenario.id, tc.id) ? '로그 숨기기' : '로그 보기' }}
                </button>
              </div>
              <div v-else class="text-muted small">
                대기 중
              </div>
            </div>
          </div>

          <!-- 테스트 로그 (확장 가능) -->
          <div
            v-if="isLogExpanded(scenario.id, tc.id) && getTestResult(scenario.id, tc.id)"
            class="test-log-container px-4 pb-3"
          >
            <div class="card border-0 shadow-sm">
              <div class="card-header bg-light d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-terminal text-primary"></i>
                  <span class="fw-semibold text-dark">테스트 실행 로그</span>
                </div>
                <span class="text-muted small">
                  {{ formatTimestamp(getTestResult(scenario.id, tc.id).timestamp) }}
                </span>
              </div>
              <div class="card-body bg-white p-0">
                <div class="log-content p-3" style="font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; font-size: 13px; line-height: 1.5; background-color: #f8f9fa; border-radius: 0 0 0.375rem 0.375rem;">
                  <div
                    v-for="(log, logIndex) in getTestResult(scenario.id, tc.id).logs"
                    :key="logIndex"
                    class="log-line py-1"
                    :class="getLogLineClass(log)"
                  >
                    <span class="log-timestamp text-muted me-2">
                      [{{ String(logIndex + 1).padStart(2, '0') }}]
                    </span>
                    {{ log }}
                  </div>
                  <div class="border-top mt-3 pt-3">
                    <div class="d-flex align-items-center gap-2">
                      <span class="badge" :class="getStatusBadgeClass(getTestResult(scenario.id, tc.id).status)">
                        {{ getStatusText(getTestResult(scenario.id, tc.id).status) }}
                      </span>
                      <span class="text-muted small">
                        {{ getTestResult(scenario.id, tc.id).message }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 실행 버튼 및 진행 상황 -->
    <div class="d-flex justify-content-between align-items-center mt-4">
      <div v-if="isRunning" class="d-flex align-items-center gap-2 text-primary">
        <div class="spinner-border spinner-border-sm" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span>테스트 실행 중...</span>
      </div>
      <div v-else class="text-muted">
        총 {{ getTotalSelectedCount() }}개 테스트케이스 선택됨
      </div>
      
      <button 
        class="btn btn-success px-4 py-2"
        @click="runTests"
        :disabled="isRunning || getTotalSelectedCount() === 0"
      >
        <span v-if="isRunning">
          <div class="spinner-border spinner-border-sm me-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          실행 중...
        </span>
        <span v-else>
          ✅ 테스트 실행하기
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ 
  scenarioList: Array,
  testResults: Object,
  isRunning: Boolean
})
const emit = defineEmits(['run-tests'])

const expanded = ref([])
const selectedTestCases = ref({})
const expandedLogs = ref(new Set())

function toggle(id) {
  if (expanded.value.includes(id)) {
    expanded.value = expanded.value.filter((i) => i !== id)
  } else {
    expanded.value.push(id)
  }
}

function isExpanded(id) {
  return expanded.value.includes(id)
}

function isAllSelected(scenario) {
  const selected = selectedTestCases.value[scenario.id] || []
  return scenario.testCases.every(tc =>
    selected.some(sel => sel.id === tc.id)
  )
}

function toggleScenarioAll(event, scenario) {
  const checked = event.target.checked
  if (checked) {
    selectedTestCases.value[scenario.id] = scenario.testCases.map(tc => ({
      ...tc,
      scenarioId: scenario.id
    }))
  } else {
    selectedTestCases.value[scenario.id] = []
  }
}

function isChecked(scenarioId, testCase) {
  return selectedTestCases.value[scenarioId]?.some(tc => tc.id === testCase.id)
}

function toggleSingleTestCase(event, scenarioId, testCase) {
  const list = selectedTestCases.value[scenarioId] || []
  const exists = list.some(tc => tc.id === testCase.id)

  if (event.target.checked && !exists) {
    selectedTestCases.value[scenarioId] = [...list, { ...testCase, scenarioId }]
  } else if (!event.target.checked && exists) {
    selectedTestCases.value[scenarioId] = list.filter(tc => tc.id !== testCase.id)
  }
}

function runTests() {
  const allSelected = Object.values(selectedTestCases.value).flat()
  emit('run-tests', allSelected)
}

function getTotalSelectedCount() {
  return Object.values(selectedTestCases.value).flat().length
}

function getTestResult(scenarioId, testCaseId) {
  const key = `${scenarioId}_${testCaseId}`
  return props.testResults[key]
}

function getStatusBadgeClass(status) {
  switch (status) {
    case 'running':
      return 'bg-warning text-dark'
    case 'success':
      return 'bg-success'
    case 'failed':
      return 'bg-danger'
    default:
      return 'bg-secondary'
  }
}

function getStatusText(status) {
  switch (status) {
    case 'running':
      return '실행중'
    case 'success':
      return '성공'
    case 'failed':
      return '실패'
    default:
      return '대기'
  }
}

function toggleTestLog(scenarioId, testCaseId) {
  const key = `${scenarioId}_${testCaseId}`
  if (expandedLogs.value.has(key)) {
    expandedLogs.value.delete(key)
  } else {
    expandedLogs.value.add(key)
  }
}

function isLogExpanded(scenarioId, testCaseId) {
  const key = `${scenarioId}_${testCaseId}`
  return expandedLogs.value.has(key)
}

function formatTimestamp(timestamp) {
  return new Date(timestamp).toLocaleString('ko-KR')
}

function getLogLineClass(log) {
  if (log.includes('✅')) return 'text-success fw-medium'
  if (log.includes('❌')) return 'text-danger fw-medium'
  if (log.includes('🚀') || log.includes('📄')) return 'text-info'
  if (log.includes('🖱️')) return 'text-warning'
  return 'text-dark'
}

function getScenarioProgress(scenario) {
  const testCases = scenario.testCases
  const completed = testCases.filter(tc => {
    const result = getTestResult(scenario.id, tc.id)
    return result && (result.status === 'success' || result.status === 'failed')
  }).length
  
  return {
    completed,
    total: testCases.length
  }
}
</script>

<style scoped>
.test-status-container {
  min-width: 200px;
  text-align: right;
}

.test-log-container {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}

.form-check-input:checked {
  background-color: #28a745;
  border-color: #28a745;
}

.badge {
  font-size: 11px;
}

.border-bottom:last-child {
  border-bottom: none !important;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
</style>