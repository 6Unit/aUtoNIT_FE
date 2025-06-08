<template>
  <div class="d-flex">
    <!-- 좌측 시나리오 트리 -->
    <div
      class="border-end bg-light p-2"
      style="width: 280px; min-height: 100vh;"
    >
      <ScenarioList
        :scenarioList="scenarioList"
        @select="handleSelectTestCase"
      />
    </div>

    <!-- 우측 상세 영역 -->
    <div class="flex-grow-1 p-4">
      <TestCaseDetail v-if="selectedTestCase" :testCase="selectedTestCase" />
      <ScenarioDetail
        v-else-if="selectedScenario"
        :scenario="selectedScenario"
      />
      <div v-else>
        <p class="text-muted">시나리오 또는 테스트 케이스를 선택하세요.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ScenarioList from "../components/ScenarioList.vue";
import TestCaseDetail from "../components/TestCaseDetail.vue";
import ScenarioDetail from "../components/ScenarioDetail.vue";

const selectedScenario = ref(null);
const selectedTestCase = ref(null);

const scenarioList = ref([
  {
    id: 1,
    name: "회원가입 시나리오",
    description:
      "사용자가 회원가입 폼을 작성하고 계정을 생성하는 전체 흐름을 검증합니다.",
    testCases: [
      { id: 1, name: "이메일 형식 확인" },
      { id: 2, name: "비밀번호 유효성 검사" },
      { id: 3, name: "비밀번호 확인 일치 여부" },
    ],
  },
  {
    id: 2,
    name: "로그인 시나리오",
    description: "등록된 사용자 정보를 기반으로 로그인 기능을 검증합니다.",
    testCases: [
      { id: 4, name: "정상 로그인" },
      { id: 5, name: "비밀번호 오류로 인한 실패" },
    ],
  },
  {
    id: 3,
    name: "프로필 수정 시나리오",
    description: "사용자가 프로필 정보를 수정하고 저장하는 기능을 확인합니다.",
    testCases: [
      { id: 6, name: "이름 수정" },
      { id: 7, name: "프로필 이미지 변경" },
      { id: 8, name: "전화번호 입력 유효성" },
    ],
  },
]);


function handleSelectTestCase(item) {
  if ("testCases" in item) {
    // 시나리오가 선택된 경우
    selectedScenario.value = item;
    selectedTestCase.value = null;
  } else {
    // 테스트케이스가 선택된 경우
    selectedTestCase.value = item;
    selectedScenario.value = null;
  }
}
</script>
