<template>
  <div class="mt-0">
    <div class="d-flex align-items-center gap-2 mb-3">
      <!-- 배지 -->
      <span
        class="badge fs-6 d-flex align-items-center justify-content-center"
        style="
          height: 40px;
          width: 100px;
          background-color: #b2eeb2;
          color: #1b5e20;
        "
      >
        {{ testCase.id }}
      </span>

      <!-- 인풋 -->
      <input
        type="text"
        v-model="scenarioTitle"
        :readonly="!isEditing"
        class="form-control form-control-sm"
        style="height: 40px; max-width: 800px; flex-grow: 1; box-shadow: none; outline: none;"
        @focus="!isEditing && $event.target.blur()"
      />

      <!-- Save 버튼 -->
      <button
        class="btn btn-outline-secondary btn-sm"
        style="height: 40px; width: 100px; flex-shrink: 0"
        @click="toggleEdit"
      >
        {{ isEditing ? "Save" : "Edit" }}
      </button>

      <button
        class="btn btn-primary btn-sm"
        style="height: 40px; width: 100px; flex-shrink: 0"
        @click="runTestCase"
      >
        실행
      </button>
    </div>

    <!-- 테이블 -->
    <div class="table-responsive mb-4">
      <table class="table table-bordered table-sm align-middle mb-0">
        <thead class="table-light text-center small">
          <tr>
            <th>ID</th>
            <th>테스트케이스 명</th>
            <th>테스트케이스 사전 흐름</th>
            <th>입력데이터</th>
            <th>예상결과</th>
            <th>수행결과</th>
            <th>성공 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center small">
            <td>{{ testCase.id }}</td>
            <td>
              <template v-if="isEditing">
                <input
                  v-model="editedName"
                  class="form-control form-control-sm"
                />
              </template>
              <template v-else>
                {{ testCase.name }}
              </template>
            </td>
            <td>
              <template v-if="isEditing">
                <input
                  v-model="editedPreCall"
                  class="form-control form-control-sm"
                />
              </template>
              <template v-else>
                {{ testCase.preCall || "-" }}
              </template>
            </td>
            <td>
              <template v-if="isEditing">
                <input
                  v-model="editedInput"
                  class="form-control form-control-sm"
                />
              </template>
              <template v-else>
                {{ testCase.input || "-" }}
              </template>
            </td>
            <td>
              <template v-if="isEditing">
                <input
                  v-model="editedExpect"
                  class="form-control form-control-sm"
                />
              </template>
              <template v-else>
                {{ testCase.expect || "-" }}
              </template>
            </td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 코드 상태 -->
    <div class="bg-white border rounded p-3">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h6 class="fw-semibold mb-0">테스트 코드</h6>
        <div class="d-flex align-items-center gap-3 small">
          <span class="badge bg-success p-2">200 OK</span>
          <span class="text-muted">795 ms</span>
          <span class="text-muted">770 B</span>
        </div>
      </div>

      <!-- YAML/TS 탭 + Edit 버튼 한 줄에 배치 -->
      <div class="d-flex justify-content-between align-items-center mb-2 mt-4">
        <!-- 왼쪽: 탭 버튼 그룹 -->
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-sm"
            :class="[
              activeTab === 'yaml'
                ? 'bg-secondary-subtle border border-border text-dark'
                : 'bg-white border border-border text-dark',
            ]"
            style="min-width: 80px"
            @click="activeTab = 'yaml'"
          >
            Yaml
          </button>
          <button
            type="button"
            class="btn btn-sm"
            :class="[
              activeTab === 'ts'
                ? 'bg-secondary-subtle border border-border text-dark'
                : 'bg-white border border-border text-dark',
            ]"
            style="min-width: 80px"
            @click="activeTab = 'ts'"
          >
            Ts
          </button>
        </div>

        <!-- 오른쪽: Edit 버튼 (YAML 탭일 때만 표시) -->
        <div v-if="activeTab === 'yaml'">
          <button
            class="btn btn-outline-secondary btn-sm"
            @click="toggleCodeEdit"
            style="min-width: 60px;"
          >
            {{ isCodeEditing ? "Save" : "Edit" }}
          </button>
        </div>
      </div>

      <!-- 코드 박스 -->
      <div class="bg-light border rounded mt-2 p-3" style="font-size: 0.85rem">
        <template v-if="activeTab === 'yaml'">
          <textarea
            v-if="isCodeEditing"
            v-model="editedYaml"
            class="form-control"
            rows="10"
            style="
              font-family: monospace;
              font-size: 0.85rem;
              padding-top: 40px;
            "
          ></textarea>
          <pre v-else class="mb-0" style="padding-top: 40px">
    <code>{{ testCase.generatedCode?.yaml || '⛔️ 코드가 아직 생성되지 않았습니다.' }}</code>
  </pre>
        </template>
        <template v-else-if="activeTab === 'ts'">
          <textarea
            v-if="isCodeEditing"
            v-model="editedTs"
            class="form-control"
            rows="10"
            style="
              font-family: monospace;
              font-size: 0.85rem;
              padding-top: 40px;
            "
          ></textarea>
          <pre v-else class="mb-0" style="padding-top: 40px">
    <code>{{ testCase.generatedCode?.ts || '// ⛔️ 코드가 아직 없습니다.' }}</code>
  </pre>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const scenarioTitle = ref("");
const checked = ref(false);
const activeTab = ref("yaml");

const isEditing = ref(false);
const editedName = ref("");
const editedPreCall = ref("");
const editedInput = ref("");
const editedExpect = ref("");

const isCodeEditing = ref(false);
const editedYaml = ref("");
const editedTs = ref("");

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

function toggleEdit() {
  if (!isEditing.value) {
    // Edit 모드 진입
    editedName.value = props.testCase.name || "";
    editedPreCall.value = props.testCase.preCall || "";
    editedInput.value = props.testCase.input || "";
    editedExpect.value = props.testCase.expect || "";
    isEditing.value = true;
  } else {
    // 저장
    props.testCase.name = editedName.value;
    props.testCase.preCall = editedPreCall.value;
    props.testCase.input = editedInput.value;
    props.testCase.expect = editedExpect.value;
    scenarioTitle.value = editedName.value;
    isEditing.value = false;
  }
}

function runTestCase() {
  // 간단한 더미 코드 생성 로직
  props.testCase.generatedCode = {
    yaml: `
tests:
  - name: ${props.testCase.name} 실행 테스트
    steps:
      - action: click
        selector: '#run-button'
    expect:
      - type: visible
        selector: 'text=테스트 완료'
    `,
    ts: `// ${props.testCase.name} 실행에 대한 TS 테스트 코드`,
  };
}

function toggleCodeEdit() {
  if (!isCodeEditing.value) {
    // 편집 시작
    editedYaml.value = props.testCase.generatedCode?.yaml || "";
    editedTs.value = props.testCase.generatedCode?.ts || "";
    isCodeEditing.value = true;
  } else {
    // 저장
    props.testCase.generatedCode.yaml = editedYaml.value;
    props.testCase.generatedCode.ts = editedTs.value;
    isCodeEditing.value = false;
  }
}
</script>
