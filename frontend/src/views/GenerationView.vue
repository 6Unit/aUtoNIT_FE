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
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
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
          <ScenarioList :scenarioList="scenarioList" @select="handleSelectTestCase" />
        </div>

        <!-- 우측 상세 영역 -->
        <div class="scenario-content">
          <TestDetail v-if="isTestPageActive" :scenarioList="scenarioList" @run-tests="handleRunTests" />
          <TestCaseDetail v-else-if="selectedTestCase" :testCase="selectedTestCase" />
          <ScenarioDetail v-else-if="selectedScenario" :scenario="selectedScenario" />
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
import { ref, onMounted } from 'vue'
import ScenarioList from '../components/ScenarioList.vue';
import TestCaseDetail from '../components/TestCaseDetail.vue';
import ScenarioDetail from '../components/ScenarioDetail.vue';
import TestDetail from '../components/TestDetail.vue'

const isScenarioGenerated = ref(false)
const showGenerationForm = ref(true)

const lastUploadedFiles = ref(null)
const currentUploadedFiles = ref({
  requirement: '요구사항정의서_최종.docx',
  source: 'frontend-backend.zip',
  validation: 'validation_data.json'
})

const filesAreDifferent = (newFiles, oldFiles) => {
  return (
    !oldFiles ||
    newFiles.requirement !== oldFiles.requirement ||
    newFiles.source !== oldFiles.source ||
    newFiles.validation !== oldFiles.validation
  )
}

onMounted(() => {
  if (filesAreDifferent(currentUploadedFiles.value, lastUploadedFiles.value)) {
    isScenarioGenerated.value = false
    showGenerationForm.value = true
  }
})

const generateScenario = () => {
  lastUploadedFiles.value = { ...currentUploadedFiles.value }
  isScenarioGenerated.value = true
  showGenerationForm.value = false
}

const scenarioList = ref([
  {
    id: 1,
    name: "회원가입 시나리오",
    description: "사용자가 회원가입 폼을 작성하고 계정을 생성하는 전체 흐름을 검증합니다.",
    testCases: [
      { id: 1, name: "이메일 형식 확인" },
      { id: 2, name: "비밀번호 유효성 검사" },
      { id: 3, name: "비밀번호 확인 일치 여부" },
      { id: 4, name: "이름 입력 확인" },
      { id: 5, name: "휴대폰 번호 형식 검사" },
      { id: 6, name: "생년월일 입력 유효성" },
      { id: 7, name: "약관 동의 체크 여부" },
      { id: 8, name: "회원가입 완료 후 리다이렉트" },
    ],
  },
  {
    id: 2,
    name: "로그인 시나리오",
    description: "등록된 사용자 정보를 기반으로 로그인 기능을 검증합니다.",
    testCases: [
      { id: 1, name: "정상 로그인" },
      { id: 2, name: "비밀번호 오류로 인한 실패" },
      { id: 3, name: "이메일 미입력 시도" },
      { id: 4, name: "비밀번호 미입력 시도" },
      { id: 5, name: "이메일 형식 오류 처리" },
      { id: 6, name: "로그인 후 메인 페이지 진입" },
      { id: 7, name: "비밀번호 특수문자 미입력" },
      { id: 8, name: "비밀번호 보기 토글 동작" },
    ],
  },
  {
    id: 3,
    name: "프로필 수정 시나리오",
    description: "사용자가 프로필 정보를 수정하고 저장하는 기능을 확인합니다.",
    testCases: [
      { id: 1, name: "이름 수정" },
      { id: 2, name: "프로필 이미지 변경" },
      { id: 3, name: "전화번호 입력 유효성" },
      { id: 4, name: "주소 입력 및 저장" },
      { id: 5, name: "비밀번호 변경 시도" },
      { id: 6, name: "입력 미완성 시 저장 불가" },
      { id: 7, name: "취소 버튼 동작 확인" },
      { id: 8, name: "수정 완료 후 알림 표시" },
    ],
  },
])

const selectedScenario = ref(null);
const selectedTestCase = ref(null);
const isTestPageActive = ref(false)

function handleSelectTestCase(item) {
  if (item.type === 'testPage') {
    selectedScenario.value = null;
    selectedTestCase.value = null;
    isTestPageActive.value = true;
  } else if ("testCases" in item) {
    selectedScenario.value = item;
    selectedTestCase.value = null;
    isTestPageActive.value = false;
  } else {
    selectedTestCase.value = item;
    selectedScenario.value = null;
    isTestPageActive.value = false;
  }
}
function handleRunTests(testcases) {
  console.log("✅ 선택된 테스트케이스 실행:", testcases)
  // 여기서 API 호출 등 처리 예정
}
</script>

<style scoped>
.generation-container {
  padding: 2rem;
  background-color: #f8fafc;
  min-height: 100vh;
}

.generation-form {
  max-width: 900px;
  margin: 0 auto;
}

/* Page Header */
.page-header {
  margin-bottom: 2rem;
  text-align: center;
}

.page-header h2 {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.5rem 0;
}

.header-subtitle {
  color: #6b7280;
  font-size: 1rem;
  margin: 0;
}

/* Files Card */
.files-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  margin-bottom: 2rem;
  overflow: hidden;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #f3f4f6;
}

.card-title-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #6b7280;
}

.card-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.file-count-badge {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Files Grid */
.files-grid {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #f3f4f6;
  transition: all 0.2s ease;
}

.file-item:hover {
  background: #f3f4f6;
  border-color: #e5e7eb;
}

.file-icon-wrapper {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.file-icon-wrapper svg {
  width: 1.25rem;
  height: 1.25rem;
  color: white;
}

.file-icon-wrapper.requirements {
  background: #3b82f6;
}

.file-icon-wrapper.source {
  background: #10b981;
}

.file-icon-wrapper.validation {
  background: #f59e0b;
}

.file-info {
  flex: 1;
  min-width: 0;
}

.file-name {
  font-weight: 500;
  color: #1f2937;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-type {
  color: #6b7280;
  font-size: 0.75rem;
}

.file-status {
  width: 1.5rem;
  height: 1.5rem;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.file-status svg {
  width: 0.875rem;
  height: 0.875rem;
  color: white;
}

/* Generate Section */
.generate-section {
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 2rem;
  text-align: center;
}

.generate-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0.75rem;
}

.generate-button:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.button-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.generate-description {
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Scenario View */
.scenario-view {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.scenario-layout {
  display: flex;
  min-height: 100vh;
}

.scenario-sidebar {
  width: 280px;
  background: #f8fafc;
  border-right: 1px solid #e5e7eb;
  padding: 1rem;
}

.scenario-content {
  flex: 1;
  padding: 2rem;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  text-align: center;
}

.empty-icon {
  width: 3rem;
  height: 3rem;
  color: #9ca3af;
  margin-bottom: 1rem;
}

.empty-text {
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .generation-container {
    padding: 1rem;
  }
  
  .card-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .file-item {
    padding: 0.75rem;
  }
  
  .generate-section {
    padding: 1.5rem;
  }
  
  .scenario-layout {
    flex-direction: column;
  }
  
  .scenario-sidebar {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .files-grid {
    padding: 1rem;
  }
  
  .file-item {
    gap: 0.75rem;
  }
  
  .file-icon-wrapper {
    width: 2rem;
    height: 2rem;
  }
  
  .file-icon-wrapper svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>