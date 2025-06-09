<template>
  <div class="mb-3 px-2">
    <div
      class="d-flex align-items-center gap-2 py-2 px-2 bg-primary text-white rounded cursor-pointer"
      @click="selectTestPage"
    >
      <span>🧪 테스트페이지</span>
    </div>
  </div>
  <div class="pt-2">
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
        <div>
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
      <ul v-show="isExpanded(scenario.id)" class="list-unstyled mb-0 bg-white">
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
          <span
            class="badge rounded-sm"
            style="background-color: #b2eeb2; color: #1b5e20; width: 26px"
          >
            {{ index + 1 }}
          </span>

          <span class="small text-dark">
            {{ tc.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["scenarioList"]);
const emit = defineEmits(["select"]);

const expanded = ref([]);
const selectedId = ref(null);

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
function selectTestPage() {
  emit("select", { type: "testPage" });
}
</script>
