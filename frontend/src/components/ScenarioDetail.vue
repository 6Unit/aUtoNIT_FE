<template>
  <div class="mt-0">
    <!-- 시나리오 제목 수정 영역 -->
    <div class="d-flex align-items-center gap-2 mb-3">
      <div class="d-flex align-items-center gap-2">
        <span
          class="badge fs-6 d-flex align-items-center justify-content-center"
          style="
            height: 40px;
            width: 100px;
            background-color: #b2eeb2;
            color: #1b5e20;
          "
        >
          {{ scenario.id }}
        </span>
        <input
          type="text"
          v-model="scenarioTitle"
          class="form-control"
          style="height: 40px; width: 800px "
        />
        <button
          class="btn btn-outline-secondary btn-sm"
          style="height: 40px; width: 100px "
          @click="saveTitle"
        >
          Save
        </button>
      </div>
      <button class="btn btn-primary btn-sm" style="height: 40px; width: 100px">
        전체 실행
      </button>
    </div>

    <!-- 시나리오 정보 -->
    <div class="table-responsive mt-4 mb-4">
      <table class="table table-bordered table-sm align-middle mb-0">
        <thead class="table-light text-center small">
          <tr>
            <th>ID</th>
            <th>시나리오 명</th>
            <th>상세설명(흐름도)</th>
          </tr>
        </thead>
        <tbody class="text-center small">
          <tr>
            <td>{{ scenario.id }}</td>
            <td>{{ scenario.name }}</td>
            <td>{{ scenario.description || "-" }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 테스트케이스 목록 테이블 -->
    <div class="bg-white border rounded p-3 mt-4">
      <div class="table-responsive">
        <h6 class="fw-semibold mb-3">테스트 케이스 목록</h6>
        <table class="table table-bordered table-sm align-middle">
          <thead class="table-light text-center small">
            <tr>
              <th style="width: 40px">
                <input
                  type="checkbox"
                  v-model="allChecked"
                  @change="toggleAll"
                />
              </th>
              <th style="width: 60px">ID</th>
              <th class="w-25">테스트케이스 명</th>
              <th>테스트케이스 사전 흐름</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="tc in scenario.testCases"
              :key="tc.id"
              class="text-center small"
            >
              <td>
                <input type="checkbox" :value="tc.id" v-model="checkedItems" />
              </td>
              <td>{{ tc.id }}</td>
              <td>{{ tc.name }}</td>
              <td>{{ tc.preCall || "-" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  scenario: Object,
});

const scenarioTitle = ref("");
const checkedItems = ref([]);
const allChecked = ref(false);


watch(
  () => props.scenario,
  (newVal) => {
    scenarioTitle.value = newVal?.name ?? "";
    checkedItems.value = [];
  },
  { immediate: true }
);

function saveTitle() {
  if (props.scenario) {
    props.scenario.name = scenarioTitle.value;
  }
}

function toggleAll() {
  if (allChecked.value) {
    checkedItems.value = props.scenario?.testCases?.map(tc => tc.id) || [];
  } else {
    checkedItems.value = [];
  }
}

watch(checkedItems, (newVal) => {
  const total = props.scenario?.testCases?.length || 0;
  allChecked.value = newVal.length === total && total > 0;
});
</script>
