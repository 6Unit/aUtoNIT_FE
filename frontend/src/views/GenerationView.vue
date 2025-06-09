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
          <ScenarioList
            :scenarioList="scenarioList"
            :showTestCases="showTestCases"
            :runScenarioId="runScenarioId"
            :shownMap="shownTestCasesMap"
            @select="handleSelectTestCase"
            @generate="handleRunAllScenarios"
          />
        </div>

        <!-- 우측 상세 영역 -->
        <div class="scenario-content">
          <TestDetail v-if="isTestPageActive" :scenarioList="scenarioList" @run-tests="handleRunTests" />
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
import { ref, onMounted } from 'vue'
import ScenarioList from '../components/ScenarioList.vue';
import TestCaseDetail from '../components/TestCaseDetail.vue';
import ScenarioDetail from '../components/ScenarioDetail.vue';
import TestDetail from '../components/TestDetail.vue'
import '../assets/styles/generationview.css'

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
    description:
      "사용자가 회원가입 폼을 작성하고 계정을 생성하는 전체 흐름을 검증합니다.",
    testCases: [
      { id: 1, name: "이메일 형식 확인",status: "pending" },
      { id: 2, name: "비밀번호 유효성 검사", status: "success" },
      { id: 3, name: "비밀번호 확인 일치 여부", status: "failed"  },
      { id: 4, name: "이름 입력 확인",status: "pending"  },
      { id: 5, name: "휴대폰 번호 형식 검사", status: "success" },
      { id: 6, name: "생년월일 입력 유효성", status: "failed"   },
      { id: 7, name: "약관 동의 체크 여부",status: "pending"  },
      { id: 8, name: "회원가입 완료 후 리다이렉트", status: "success" },
    ],
  },
  {
    id: 2,
    name: "로그인 시나리오",
    description: "등록된 사용자 정보를 기반으로 로그인 기능을 검증합니다.",
    testCases: [
      { id: 1, name: "정상 로그인", status: "failed"   },
      { id: 2, name: "비밀번호 오류로 인한 실패",status: "pending"  },
      { id: 3, name: "이메일 미입력 시도", status: "success" },
      { id: 4, name: "비밀번호 미입력 시도", status: "failed"   },
      { id: 5, name: "이메일 형식 오류 처리",status: "pending"  },
      { id: 6, name: "로그인 후 메인 페이지 진입", status: "success" },
      { id: 7, name: "비밀번호 특수문자 미입력", status: "failed"   },
      { id: 8, name: "비밀번호 보기 토글 동작",status: "pending"  },
    ],
  },
  {
    id: 3,
    name: "프로필 수정 시나리오",
    description: "사용자가 프로필 정보를 수정하고 저장하는 기능을 확인합니다.",
    testCases: [
      { id: 1, name: "이름 수정", status: "success" },
      { id: 2, name: "프로필 이미지 변경", status: "failed"   },
      { id: 3, name: "전화번호 입력 유효성",status: "pending"  },
      { id: 4, name: "주소 입력 및 저장", status: "success" },
      { id: 5, name: "비밀번호 변경 시도", status: "failed"   },
      { id: 6, name: "입력 미완성 시 저장 불가",status: "pending"  },
      { id: 7, name: "취소 버튼 동작 확인", status: "success" },
      { id: 8, name: "수정 완료 후 알림 표시", status: "failed"   },
    ],
  },
])

const selectedScenario = ref(null);
const selectedTestCase = ref(null);
const isTestPageActive = ref(false);
const showTestCases = ref(false);
const runScenarioId = ref(null);
const shownTestCasesMap = ref({});


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

// 좌측 리스트 다 보이고, 우측 목록도 함께 보임
function handleRunAllScenarios() {
  // 모든 시나리오 id에 대해 shownMap[id] = true 설정
  scenarioList.value.forEach((scenario) => {
    shownTestCasesMap.value[scenario.id] = true;
  });
  // 우측 상세 뷰가 시나리오일 경우, 그 안의 테스트케이스도 보이게 함
  if (selectedScenario.value) {
    showTestCases.value = true;
  }
}

function handleRunScenario(id) {
  shownTestCasesMap.value[id] = true;
  runScenarioId.value = id;
}

function handleRunTests(testcases) {
  console.log("✅ 선택된 테스트케이스 실행:", testcases)
  // 여기서 API 호출 등 처리 예정
}
</script>