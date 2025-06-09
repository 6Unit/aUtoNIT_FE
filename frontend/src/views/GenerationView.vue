<template>
  <div class="generation-container">
    <!-- 업로드된 파일 요약 + 시나리오 생성 버튼 -->
    <div v-if="showGenerationForm" class="generation-form">
      <!-- 헤더 섹션 -->
      <div class="header-section">
        <div class="header-content">
          <div class="icon-wrapper">
            <svg class="header-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <div>
            <h1 class="header-title">테스트 시나리오 생성</h1>
            <p class="header-subtitle">업로드된 파일을 기반으로 자동 테스트 시나리오를 생성합니다</p>
          </div>
        </div>
      </div>

      <!-- 업로드된 파일 카드 -->
      <div class="files-card">
        <div class="card-header">
          <div class="card-title-wrapper">
            <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h2a2 2 0 012 2v2H8V5z"></path>
            </svg>
            <h2 class="card-title">업로드된 파일 목록</h2>
          </div>
          <div class="file-count-badge">3개 파일</div>
        </div>

        <div class="files-list">
          <div class="file-item">
            <div class="file-icon-wrapper requirement">
              <svg class="file-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div class="file-info">
              <div class="file-name">{{ currentUploadedFiles.requirement }}</div>
              <div class="file-type">요구사항 정의서</div>
            </div>
            <div class="file-status">
              <svg class="status-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <div class="file-item">
            <div class="file-icon-wrapper source">
              <svg class="file-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <div class="file-info">
              <div class="file-name">{{ currentUploadedFiles.source }}</div>
              <div class="file-type">소스코드 파일</div>
            </div>
            <div class="file-status">
              <svg class="status-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <div class="file-item">
            <div class="file-icon-wrapper validation">
              <svg class="file-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <div class="file-info">
              <div class="file-name">{{ currentUploadedFiles.validation }}</div>
              <div class="file-type">검증 데이터 파일</div>
            </div>
            <div class="file-status">
              <svg class="status-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- 시나리오 생성 버튼 -->
      <div class="generate-section">
        <button @click="generateScenario" class="generate-button">
          <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span>시나리오 자동 생성</span>
        </button>
        <p class="generate-description">AI가 업로드된 파일을 기반으로 분석하여 최적화된 테스트 시나리오를 생성합니다</p>
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
          <TestCaseDetail v-if="selectedTestCase" :testCase="selectedTestCase" />
          <ScenarioDetail v-else-if="selectedScenario" :scenario="selectedScenario" />
          <div v-else class="empty-state">
            <svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

function handleSelectTestCase(item) {
  if ("testCases" in item) {
    selectedScenario.value = item;
    selectedTestCase.value = null;
  } else {
    selectedTestCase.value = item;
    selectedScenario.value = null;
  }
}
</script>

<style scoped>
.generation-container {
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem;
}

.generation-form {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 0.6s ease-out;
}

/* 헤더 섹션 */
.header-section {
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 2rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.icon-wrapper {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.header-icon {
  width: 3rem;
  height: 3rem;
  color: white;
}

.header-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.header-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0.5rem 0 0 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 파일 카드 */
.files-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.card-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f2f5;
}

.card-title-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #667eea;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.file-count-badge {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.files-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.file-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.file-icon-wrapper {
  width: 3rem;
  height: 3rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.file-icon-wrapper.requirement {
  background: linear-gradient(135deg, #4299e1, #3182ce);
}

.file-icon-wrapper.source {
  background: linear-gradient(135deg, #48bb78, #38a169);
}

.file-icon-wrapper.validation {
  background: linear-gradient(135deg, #ed8936, #dd6b20);
}

.file-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.file-info {
  flex: 1;
}

.file-name {
  font-weight: 600;
  color: #2d3748;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.file-type {
  color: #718096;
  font-size: 0.875rem;
}

.file-status {
  width: 2rem;
  height: 2rem;
  background: #48bb78;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-icon {
  width: 1rem;
  height: 1rem;
  color: white;
}

/* 생성 버튼 섹션 */
.generate-section {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

.generate-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-size: 1.125rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}

.generate-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(255, 255, 255, 0.3);
  background: #f7fafc;
  color: #5a67d8;
}

.button-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.generate-description {
  color: rgba(255, 255, 255, 0.9);
  margin-top: 1rem;
  font-size: 0.95rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 시나리오 뷰 */
.scenario-view {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.scenario-layout {
  display: flex;
  min-height: 100vh;
}

.scenario-sidebar {
  width: 280px;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
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
  width: 4rem;
  height: 4rem;
  color: #a0aec0;
  margin-bottom: 1rem;
}

.empty-text {
  font-size: 1.125rem;
  color: #718096;
  margin: 0;
}

/* 애니메이션 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .generation-container {
    padding: 1rem;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .header-title {
    font-size: 2rem;
  }
  
  .files-card {
    padding: 1.5rem;
  }
  
  .card-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .file-item {
    padding: 1rem;
  }
  
  .scenario-layout {
    flex-direction: column;
  }
  
  .scenario-sidebar {
    width: 100%;
  }
}
</style>