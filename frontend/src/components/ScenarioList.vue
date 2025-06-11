<template>
  <!-- 스크롤 가능한 시나리오 목록 영역 -->
  <div class="scenario-list-scroll">
    <!-- 시나리오 목록이 있을 때만 렌더링 -->
    <div v-if="hasScenarios">
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
            <span style="font-size: 14px">📄 {{ scenario.name || '이름 없음' }}</span>
            <span class="small ms-1" style="color: #999">
              ({{ (scenario.testCases && scenario.testCases.length) || 0 }})
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
            v-for="(tc, index) in (scenario.testCases || [])"
            :key="tc.id || `tc-${index}`"
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
              {{ tc.name || '테스트 케이스' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- 시나리오 목록이 없을 때 -->
    <div v-else class="text-center py-4 text-muted">
      <p>로딩 중이거나 시나리오가 없습니다.</p>
    </div>
  </div>

  <!-- 절대 위치로 화면 최하단에 고정되는 버튼들 -->
  <div class="scenario-button-fixed">
    <!-- 시나리오 추가 버튼 -->
    <button 
      class="btn btn-outline-success btn-sm w-100 mb-2" 
      @click="addNewScenario"
      :disabled="!hasScenarios"
    >
      <span style="font-size: 16px; margin-right: 4px;">+</span>
      시나리오 추가
    </button>
    
    <!-- 전체 테스트케이스 생성 버튼 -->
    <button 
      class="btn btn-primary btn-sm w-100" 
      @click="generateAllTestCases"
      :disabled="!hasScenarios"
    >
      전체 테스트케이스 생성
    </button>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

// props 정의 개선
const props = defineProps({
  scenarioList: {
    type: Array,
    required: true,
    default: () => []
  },
  showTestCases: {
    type: Boolean,
    default: false
  },
  runScenarioId: {
    type: [String, Number],
    default: null
  },
  shownMap: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(["select", "generate", "add-scenario"]);

const expanded = ref([]);
const selectedId = ref(null);

// computed로 시나리오 리스트 확인
const hasScenarios = computed(() => {
  return props.scenarioList && Array.isArray(props.scenarioList) && props.scenarioList.length > 0;
});

// props 변경 감지
watch(() => props.scenarioList, (newList) => {
  console.log('🔄 ScenarioList props 변경됨:', newList);
  console.log('📊 시나리오 개수:', newList?.length || 0);
}, { immediate: true, deep: true });

function generateAllTestCases() {
  console.log('🚀 전체 테스트케이스 생성 요청');
  emit("generate"); // 부모에게 알려주기만 함
}

function addNewScenario() {
  console.log('➕ 새 시나리오 추가 요청');
  emit("add-scenario"); // 부모에게 알려주기
}

function toggle(id) {
  if (expanded.value.includes(id)) {
    expanded.value = expanded.value.filter((i) => i !== id);
  } else {
    expanded.value.push(id);
  }
  console.log('🔄 토글된 시나리오 ID:', id, '확장된 목록:', expanded.value);
}

function isExpanded(id) {
  return expanded.value.includes(id);
}

function selectTestCase(tc) {
  if (!tc) {
    console.warn('⚠️ 빈 테스트케이스 선택됨');
    return;
  }
  selectedId.value = tc.id;
  console.log('✅ 테스트케이스 선택됨:', tc);
  emit("select", tc);
}

function handleScenarioClick(scenario) {
  if (!scenario || !scenario.id) {
    console.warn('⚠️ 빈 시나리오 클릭됨');
    return;
  }
  console.log('👆 시나리오 클릭됨:', scenario);
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
  if (!scenario || !scenario.testCases) return "text-dark";
  
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