<template>
  <div class="generation-container">
    <!-- 업로드된 파일 요약 + 시나리오 생성 버튼 -->
    <div v-if="showGenerationForm" class="generation-form">
      <!-- 페이지 헤더 -->
      <div class="page-header">
        <h2>테스트 시나리오 생성</h2>
        <p class="header-subtitle">업로드된 파일을 기반으로 자동 테스트 시나리오를 생성합니다</p>
      </div>

      <!-- 업로드된 파일 카드 -->
      <div class="files-card">
        <div class="card-header">
          <div class="card-title-wrapper">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h2a2 2 0 012 2v2H8V5z"></path>
              </svg>
            </div>
            <h3>업로드된 파일 목록</h3>
          </div>
          <div class="file-count-badge">3개 파일</div>
        </div>

        <div class="files-grid">
          <div class="file-item">
            <div class="file-icon-wrapper requirements">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div class="file-info">
              <div class="file-name">{{ currentUploadedFiles.requirement }}</div>
              <div class="file-type">요구사항 정의서</div>
            </div>
            <div class="file-status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <div class="file-item">
            <div class="file-icon-wrapper source">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <div class="file-info">
              <div class="file-name">{{ currentUploadedFiles.source }}</div>
              <div class="file-type">소스코드 파일</div>
            </div>
            <div class="file-status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <div class="file-item">
            <div class="file-icon-wrapper validation">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <div class="file-info">
              <div class="file-name">{{ currentUploadedFiles.validation }}</div>
              <div class="file-type">검증 데이터 파일</div>
            </div>
            <div class="file-status">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- 시나리오 생성 버튼 -->
      <div class="generate-section">
        <button @click="generateScenario" class="generate-button">
          <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>시나리오 자동 생성</span>
        </button>
        <p class="generate-description">AI가 업로드된 파일을 분석하여 최적화된 테스트 시나리오를 생성합니다</p>
      </div>
    </div>

    <!-- 시나리오 리스트 출력 -->
    <div v-else class="scenario-view">
      <div class="scenario-layout">
        <!-- 좌측 시나리오 트리 -->
        <div class="scenario-sidebar">
          <ScenarioList
            :scenarioList="scenarios"
            :showTestCases="showTestCases"
            :runScenarioId="runScenarioId"
            :shownMap="shownTestCasesMap"
            @select="handleSelectTestCase"
            @generate="handleRunAllScenarios"
          />
        </div>

        <!-- 우측 상세 영역 -->
        <div class="scenario-content">
          <TestDetail v-if="isTestPageActive" :scenarioList="scenarios" @run-tests="handleRunTests" />
          <TestCaseDetail v-else-if="selectedTestCase" :testCase="selectedTestCase" />
          <ScenarioDetail
            v-else-if="selectedScenario"
            :scenario="selectedScenario"
            :shownMap="shownTestCasesMap"
            :showTestCases="showTestCases"
            @run-scenario="handleRunScenario"
          />
          <div v-else class="empty-state">
            <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <p class="empty-text">시나리오 또는 테스트 케이스를 선택하세요</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import ScenarioList from '../components/ScenarioList.vue';
import TestCaseDetail from '../components/TestCaseDetail.vue';
import ScenarioDetail from '../components/ScenarioDetail.vue';
import TestDetail from '../components/TestDetail.vue'
import '../assets/styles/generationview.css'
// api 데이터
import { useScenarioStore } from '../api/scenarioStore'
import { useTestCaseStore } from '../api/testCaseStore'

const isScenarioGenerated = ref(false)
const showGenerationForm = ref(true)
const lastUploadedFiles = ref(null)
const currentUploadedFiles = ref({
  requirement: '요구사항정의서_최종.docx',
  source: 'frontend-backend.zip',
  validation: 'validation_data.json'
})
const selectedScenario = ref(null);
const selectedTestCase = ref(null);
const isTestPageActive = ref(false);
const showTestCases = ref(false);
const runScenarioId = ref(null);
const shownTestCasesMap = ref({});

const { scenarioList, loadScenarios } = useScenarioStore()
const { setTestCases } = useTestCaseStore()

// 🔥 핵심 수정: computed로 scenarios 생성하여 안전하게 사용
const scenarios = computed(() => {
  const list = scenarioList.value || []
  console.log('💡 scenarios computed 실행됨, 길이:', list.length)
  return list
})

// 🔥 추가: scenarioList 변경 감지 (디버깅용)
watch(scenarioList, (newVal) => {
  console.log('scenarioList 변경 감지됨, 길이:', newVal?.length || 0)
}, { immediate: true, deep: true })

// 파일이 다른지 확인하는 함수
const filesAreDifferent = (newFiles, oldFiles) => {
  return (
    !oldFiles ||
    newFiles.requirement !== oldFiles.requirement ||
    newFiles.source !== oldFiles.source ||
    newFiles.validation !== oldFiles.validation
  )
}

// onMounted를 하나로 통합
onMounted(() => {
  console.log('📦 onMounted 실행됨')
  
  // 파일이 다르면 생성 폼 표시
  if (filesAreDifferent(currentUploadedFiles.value, lastUploadedFiles.value)) {
    isScenarioGenerated.value = false
    showGenerationForm.value = true
    console.log('🔄 파일이 변경되어 생성 폼을 표시합니다')
  }
  
  // 시나리오가 이미 생성되었다면 로드
  if (isScenarioGenerated.value) {
    loadScenarios()
    console.log('✅ 시나리오 로드됨, 길이:', scenarios.value.length)
  }
})

const generateScenario = async () => {
  console.log('🚀 시나리오 생성 시작')
  
  try {
    // 파일 정보 저장
    lastUploadedFiles.value = { ...currentUploadedFiles.value }
    
    // 시나리오 로드 실행
    console.log('📡 loadScenarios 호출 시작')
    await loadScenarios()
    
    // nextTick으로 DOM 업데이트 보장
    await nextTick()
    console.log('✅ 최종 scenarios 길이:', scenarios.value.length)
    
    // 로드 완료 후 상태 변경
    if (scenarios.value.length > 0) {
      isScenarioGenerated.value = true
      showGenerationForm.value = false
      console.log('✅ 화면 전환 완료')
    } else {
      console.error('❌ 시나리오 데이터가 비어있음')
    }
    
  } catch (error) {
    console.error('❌ 시나리오 생성 중 에러:', error)
    isScenarioGenerated.value = false
    showGenerationForm.value = true
  }
}

const handleSelectScenario = (scenario) => {
  selectedScenario.value = scenario
}

function handleSelectTestCase(item) {
  console.log('🎯 아이템 선택됨:', item)
  
  if (item.type === 'testPage') {
    selectedScenario.value = null;
    selectedTestCase.value = null;
    isTestPageActive.value = true;
  } else if (item && "testCases" in item) {
    selectedScenario.value = item;
    selectedTestCase.value = null;
    isTestPageActive.value = false;
  } else {
    selectedTestCase.value = item;
    selectedScenario.value = null;
    isTestPageActive.value = false;
  }
}

// 좌측 리스트 다 보이고, 우측 목록도 함께 보임
function handleRunAllScenarios() {
  console.log('🚀 전체 시나리오 실행')
  // 모든 시나리오 id에 대해 shownMap[id] = true 설정
  scenarioList.value.forEach((scenario) => {
    shownTestCasesMap.value[scenario.id] = true;  // 좌측 시나리오 리스트 모두 펼치기
  });
  // 우측 상세 뷰가 시나리오일 경우, 그 안의 테스트케이스도 보이게 함
  if (selectedScenario.value) {
    showTestCases.value = true;
  }
}

// ✅ 시나리오 개별 실행 및 테스트케이스 생성
async function handleRunScenario(id) {
  console.log('🎯 개별 시나리오 실행:', id)
  
  try {
    const testCases = await generateTestCasesFromAI(id)
    setTestCases(id, testCases)
    shownTestCasesMap.value[id] = true
    runScenarioId.value = id
    showTestCases.value = true
    
    console.log('✅ 테스트케이스 생성 완료:', testCases)
  } catch (error) {
    console.error('❌ 테스트케이스 생성 중 에러:', error)
  }
}

// ✅ 테스트케이스 생성 모의 함수
async function generateTestCasesFromAI(scenarioId) {
  console.log('🤖 AI 테스트케이스 생성 시작:', scenarioId)
  
  // 시뮬레이션 지연
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return [
    {
      id: `${scenarioId}-1`,
      name: '이메일 형식 확인',
      preCall: '회원가입 페이지 진입 → 이메일 입력',
      status: 'pending'
    },
    {
      id: `${scenarioId}-2`,
      name: '비밀번호 길이 체크',
      preCall: '비밀번호에 5자리 입력',
      status: 'pending'
    }
  ]
}

function handleRunTests(testcases) {
  console.log("✅ 선택된 테스트케이스 실행:", testcases)
  // 여기서 API 호출 등 처리 예정
}
</script>