<template>
  <div class="mt-0">
    <!-- 상단 입력 영역 -->
    <div class="d-flex align-items-center justify-content-between mb-3">
      <div class="d-flex align-items-center gap-2">
        <!-- 높이 맞춘 Badge -->
        <span
          class="badge fs-6 d-flex align-items-center justify-content-center"
          style="
            height: 40px;
            width: 80px;
            background-color: #b2eeb2;
            color: #1b5e20;
          "
        >
          1
        </span>

        <!-- 인풋 -->
        <input
          type="text"
          v-model="scenarioTitle"
          class="form-control form-control-sm"
          style="width: 800px; height: 40px"
        />

        <!-- Save 버튼 -->
        <button
          class="btn btn-outline-secondary btn-sm"
          style="height: 40px; width: 80px"
          @click="saveTitle"
        >
          Save
        </button>
      </div>

      <!-- 전체 실행 버튼 -->
      <button class="btn btn-primary btn-sm" style="height: 40px">
        전체 실행
      </button>
    </div>

    <!-- 박스 내부 타이틀 -->
    <!-- <div class="bg-light border px-3 py-2 mb-2 text-muted" style="opacity: 0.7">
      {{ testCase.name }}
    </div> -->

    <!-- 테이블 -->
    <div class="table-responsive mb-4">
      <table class="table table-bordered table-sm align-middle mb-0">
        <thead class="table-light text-center small">
          <tr>
            <th></th>
            <th>ID</th>
            <th>테스트케이스 명</th>
            <th>테스트케이스 사전 호출</th>
            <th>입력데이터</th>
            <th>예상결과</th>
            <th>수행결과</th>
            <th>성공 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center small">
            <td>
              <input type="checkbox" v-model="checked" />
            </td>
            <td>1</td>
            <td>{{ testCase.name }}</td>
            <td>filter by firstName</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 코드 상태 -->
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h6 class="fw-semibold mb-0">테스트 코드</h6>
      <div class="d-flex align-items-center gap-2 small">
        <span class="badge bg-success p-2">200 OK</span>
        <span class="text-muted">795 ms</span>
        <span class="text-muted">770 B</span>
      </div>
    </div>

    <!-- 탭 -->
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: activeTab === 'yaml' }"
          href="#"
          @click.prevent="activeTab = 'yaml'"
        >
          Yaml
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: activeTab === 'ts' }"
          href="#"
          @click.prevent="activeTab = 'ts'"
        >
          Ts
        </a>
      </li>
    </ul>

    <!-- 코드 박스 -->
    <div class="bg-white border rounded mt-2 p-3" style="font-size: 0.85rem">
      <pre v-if="activeTab === 'yaml'" class="mb-0"><code>
{
  "args": {
    "firstName": "foo1",
    "lastName": "foo2"
  },
  "headers": {
    "accept": "*/*"
  },
  "url": "https://postman-echo.com/get?firstName=foo1&lastName=foo2"
}
      </code></pre>

      <pre v-else-if="activeTab === 'ts'" class="mb-0"><code>
<!-- Ts 코드는 아직 없습니다. -->
      </code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const scenarioTitle = ref("");
const checked = ref(false);
const activeTab = ref("yaml");

const props = defineProps({
  testCase: {
    type: Object,
  },
});

// testCase가 바뀔 때마다 input에 이름 반영
watch(
  () => props.testCase,
  (newVal) => {
    if (newVal?.name) {
      scenarioTitle.value = newVal.name;
    }
  },
  { immediate: true }
);

// Save 클릭 시 testCase.name 값 반영
function saveTitle() {
  if (props.testCase) {
    props.testCase.name = scenarioTitle.value;
  }
}
</script>
