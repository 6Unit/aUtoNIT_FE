<template>
    <div class="pt-2">
      <div
        v-for="scenario in scenarioList"
        :key="scenario.id"
        class="mb-2 border-bottom"
      >
        <!-- 시나리오 제목 + 전체선택 체크박스 -->
        <div
          class="d-flex justify-content-between align-items-center px-2 py-2 bg-light fw-semibold"
          @click="toggle(scenario.id)"
          style="cursor: pointer;"
        >
          <div class="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              :checked="isAllSelected(scenario)"
              @change="toggleScenarioAll($event, scenario)"
              @click.stop
            />
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
          v-show="isExpanded(scenario.id)"
          class="list-unstyled mb-0 bg-white"
        >
          <li
            v-for="(tc, index) in scenario.testCases"
            :key="tc.id"
            class="d-flex align-items-center gap-2 px-3 py-2"
            :style="index !== 0 ? 'border-top: 1px solid #eee' : ''"
          >
            <input
              type="checkbox"
              :value="tc"
              :checked="isChecked(scenario.id, tc)"
              @change="toggleSingleTestCase($event, scenario.id, tc)"
            />
            <span
              class="badge rounded-sm"
              style="background-color: #b2eeb2; color: #1b5e20; width: 26px"
            >
              {{ index + 1 }}
            </span>
            <span class="small text-dark">{{ tc.name }}</span>
          </li>
        </ul>
      </div>
  
      <!-- 실행 버튼 -->
      <div class="text-end mt-4">
        <button class="btn btn-success" @click="runTests">
          ✅ 테스트 실행하기
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({ scenarioList: Array })
  const emit = defineEmits(['run-tests'])
  
  const expanded = ref([])
  const selectedTestCases = ref({})
  
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
      selectedTestCases.value[scenario.id] = [...scenario.testCases]
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
      selectedTestCases.value[scenarioId] = [...list, testCase]
    } else if (!event.target.checked && exists) {
      selectedTestCases.value[scenarioId] = list.filter(tc => tc.id !== testCase.id)
    }
  }
  
  function runTests() {
    const allSelected = Object.values(selectedTestCases.value).flat()
    emit('run-tests', allSelected)
  }
  </script>
  

  