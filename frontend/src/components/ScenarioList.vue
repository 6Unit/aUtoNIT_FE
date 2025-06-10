<template>
  <!-- 스크롤 가능한 시나리오 목록 영역 -->
  <div class="scenario-list-scroll">
    <div
      v-for="scenario in scenarioList"
      :key="scenario.id"
      class="mb-2 border-bottom"
    >
      <!-- 시나리오 제목 -->
      <div
        @click="handleScenarioClick(scenario)"
        class="d-flex justify-content-between align-items-center px-2 py-2 bg-light cursor-pointer fw-semibold"
      >
        <div :class="getScenarioStatusClass(scenario)">
          <span style="font-size: 14px">📄 {{ scenario.name }}</span>
          <span class="small ms-1" style="color: #999">
            ({{ scenario.testCases.length }})
          </span>
        </div>
        <div style="color: #666">
          {{ isExpanded(scenario.id) ? "▼" : "▶" }}
        </div>
      </div>

      <!-- 테스트 케이스 목록 -->
      <ul
        v-show="isExpanded(scenario.id) && shownMap?.[scenario.id]"
        class="list-unstyled mb-0 bg-white"
      >
        <li
          v-for="(tc, index) in scenario.testCases"
          :key="tc.id"
          class="d-flex align-items-center justify-content-start gap-2 px-3 py-2"
          :style="[
            'cursor: pointer',
            index !== 0 ? 'border-top: 1px solid #eeeeee' : '',
          ]"
          @click="selectTestCase(tc)"
        >
          <span class="badge rounded-sm" :style="getBadgeStyle(tc.status)">
            {{ index + 1 }}
          </span>

          <span class="small text-dark">
            {{ tc.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>

  <!-- 절대 위치로 화면 최하단에 고정되는 버튼 -->
  <div class="scenario-button-fixed">
    <button class="btn btn-primary btn-sm w-100" @click="generateAllTestCases">
      전체 테스트케이스 생성
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// 시나리오 목록 배열, 오른쪽 상세페이지에서 테그스케이스 리스트 보일지 여부
// 실행중인 시나리오 ID, 시나리오별 테스트케이스 표시 여부 map {1: true, 2:false}
const props = defineProps([
  "scenarioList",
  "showTestCases",
  "runScenarioId",
  "shownMap",
]);
const emit = defineEmits(["select", "generate"]);

const expanded = ref([]);
const selectedId = ref(null);

function generateAllTestCases() {
  emit("generate"); // 부모에게 알려주기만 함
}

function toggle(id) {
  if (expanded.value.includes(id)) {
    expanded.value = expanded.value.filter((i) => i !== id);
  } else {
    expanded.value.push(id);
  }
}

function isExpanded(id) {
  return expanded.value.includes(id);
}

function selectTestCase(tc) {
  selectedId.value = tc.id;
  emit("select", tc);
}

function handleScenarioClick(scenario) {
  toggle(scenario.id); // 토글 열고 닫기
  emit("select", scenario); // scenario-detail 뷰 열기 위해 emit
}

function getBadgeStyle(status) {
  const base = "color: white; width: 26px";
  if (status === "success") return `${base}; background-color: #10b981`; // 초록
  if (status === "failed") return `${base}; background-color: #ef4444`; // 빨강
  return `${base}; background-color: #d1d5db; color: #374151`; // 회색
}

function getScenarioStatusClass(scenario) {
  if (
    scenario.testCases.length > 0 &&
    scenario.testCases.every((tc) => tc.status === "success")
  ) {
    return "text-success";
  }

  if (scenario.testCases.some((tc) => tc.status === "failed")) {
    return "text-danger";
  }

  return "text-dark";
}
</script>
