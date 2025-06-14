<template>
  <div class="mt-0">
    <!-- 시나리오 제목 수정 영역 -->
    <div class="d-flex align-items-center gap-2 mb-3">
      <div class="d-flex align-items-center gap-2 flex-grow-1">
        <span
          class="badge d-flex align-items-center justify-content-center text-center"
          style="
            height: 40px;
            padding: 4px 12px;
            background-color: #b2eeb2;
            color: #1b5e20;
            font-size: 12px;
            font-weight: 600;
            white-space: nowrap;
            border-radius: 6px;
          "
          :title="scenario.id"
        >
          {{ scenario.id }}
        </span>
        <input
          type="text"
          v-model="scenarioTitle"
          class="form-control flex-grow-1"
          :readonly="true"
          @focus="$event.target.blur()"
          style="height: 40px; min-width: 300px;"
        />
        <button
          class="btn btn-outline-secondary btn-sm"
          style="height: 40px; width: 80px; font-size: 12px;"
          @click="toggleEdit"
        >
          {{ isEditing ? "Save" : "Edit" }}
        </button>
      </div>
      <button
        class="btn btn-primary btn-sm"
        style="height: 40px; width: 80px; font-size: 12px;"
        @click="handleExecuteClick"
      >
        실행
      </button>
    </div>

    <!-- 시나리오 정보 -->
    <div class="table-responsive mt-4 mb-4">
      <table class="table table-bordered table-sm align-middle mb-0">
        <thead class="table-light text-center small">
          <tr>
            <th style="width: auto; min-width: 100px;">ID</th>
            <th style="width: 25%; min-width: 200px;">시나리오 명</th>
            <th style="width: 60%;">상세설명(흐름도)</th>
          </tr>
        </thead>
        <tbody class="text-center small">
          <tr>
            <td style="white-space: nowrap; font-size: 11px; font-weight: 600; padding: 8px 12px;">
              {{ scenario.id }}
            </td>
            <td style="text-align: left; padding: 8px;">
              <template v-if="isEditing">
                <input
                  v-model="editableName"
                  class="form-control form-control-sm"
                />
              </template>
              <template v-else>
                <div style="word-break: break-word; line-height: 1.4;">
                  {{ scenario.name }}
                </div>
              </template>
            </td>
            <td style="text-align: left; padding: 8px;">
              <template v-if="isEditing">
                <textarea
                  v-model="editableDesc"
                  class="form-control form-control-sm"
                  rows="3"
                ></textarea>
              </template>
              <template v-else>
                <div style="word-break: break-word; line-height: 1.4;">
                  {{ scenario.description || "-" }}
                </div>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 테스트케이스 목록 테이블 -->
    <div
      v-if="
        isTestCaseVisible
      "
      class="bg-white border rounded p-3 mt-4"
    >
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
              <th style="width: 140px">ID</th>
              <th class="w-25">테스트케이스 명</th>
              <th>UI 흐름</th>
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
    <div v-if="isTestCaseVisible" class="d-flex justify-content-end mt-3">
      <button class="btn btn-success btn-md" @click="handleGenerateCode">
        코드 생성
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTestCaseStore } from "../api/testCaseStore";

const { generateTestCasesByAI, setTestCases, getTestCases } = useTestCaseStore();


const props = defineProps({
  scenario: Object,
  showTestCases: Boolean,
  shownMap: Object,
});

const emit = defineEmits(["run-scenario", "update-scenario"]);

const scenarioTitle = ref(""); // 시나리오 이름 수정용
const checkedItems = ref([]); // 선택된 테스트케이스 ID 배열
const allChecked = ref(false); // 전체 선택 여부

const isEditing = ref(false); // 편집 모드 여부
const editableName = ref(""); // 편집 중인 시나리오명
const editableDesc = ref(""); // 편집 중인 상세설명

const isTestCaseVisible = ref(false); // 테스트메이스 생성 여부

// 시나리오 바뀌면 타이틀 및 체크 초기화
watch(
  () => props.scenario,
  (newVal) => {
    scenarioTitle.value = newVal?.name ?? "";
    checkedItems.value = [];
    isTestCaseVisible.value = false;

    // ✅ 실행 버튼 안 눌러도, 테스트케이스가 있으면 표시
    isTestCaseVisible.value =
      Array.isArray(newVal?.testCases) && newVal.testCases.length > 0;
  },

  { immediate: true }
);

function saveTitle() {
  if (props.scenario) {
    props.scenario.name = scenarioTitle.value;
  }
}

// 전체 체크 토글 함수
function toggleAll() {
  if (allChecked.value) {
    checkedItems.value = props.scenario?.testCases?.map((tc) => tc.id) || [];
  } else {
    checkedItems.value = [];
  }
}

// 개별 체크 변화 시 allChecked 갱신
watch(checkedItems, (newVal) => {
  const total = props.scenario?.testCases?.length || 0;
  allChecked.value = newVal.length === total && total > 0;
});


async function handleExecuteClick() {
  const origin = getTestCases(props.scenario.id); 
  const generated = await generateTestCasesByAI(origin); 
  setTestCases(props.scenario.id, generated); 
  emit("run-scenario", props.scenario.id);
  isTestCaseVisible.value = true;
}


function toggleEdit() {
  if (!isEditing.value) {
    // 편집 시작
    editableName.value = props.scenario.name;
    editableDesc.value = props.scenario.description;
    isEditing.value = true;
    console.log('✏️ 편집 모드 시작');
  } else {
    // 저장 - API 통신으로 수정
    const updatedData = {
      name: editableName.value,
      description: editableDesc.value
    };
    
    console.log('✏️ 시나리오 수정 요청:', props.scenario.id, updatedData);
    
    // 부모 컴포넌트에 수정 요청 emit
    emit("update-scenario", props.scenario.id, updatedData);
    
    // 로컬 상태는 일단 업데이트 (낙관적 업데이트)
    props.scenario.name = editableName.value;
    props.scenario.description = editableDesc.value;
    scenarioTitle.value = editableName.value; // 상단 인풋창에도 반영
    
    isEditing.value = false;
  }
}

// ✅ 여기에 이 함수 추가
async function handleGenerateCode() {
  const selectedTestCases = props.scenario.testCases.filter((tc) =>
    checkedItems.value.includes(tc.id)
  );

  for (const tc of selectedTestCases) {
    const code = await generateCodeForTestCase(tc);
    tc.generatedCode = code;
  }
}

// ✅ 그리고 아래 코드도 함께 추가
async function generateCodeForTestCase(testCase) {
  // 나중에 여기를 백엔드 API 호출로 바꾸면 됨
  return {
    yaml: `
tests:
  - name: ${testCase.name} 자동 생성 테스트
    steps:
      - action: click
        selector: '#example'
    expect:
      - type: visible
        selector: 'text=성공'
    `,
    ts: `// ${testCase.name} 테스트에 대한 TS 코드`,
  };
}
</script>