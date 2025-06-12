// src/store/testCaseStore.js
import { ref } from 'vue'
import { dummyTestCases } from '../api/dummyTestCases'
// import axios from '../api/axiosInstance' // 추후 API 연동 시 사용

const testCaseMap = ref({}) // scenario_id 기준으로 테스트케이스 배열 저장

export function useTestCaseStore() {

  // 더미데이터를 로딩해서 testCaseMap에 넣음
  function loadDummyTestCases() {

    const map = {}

    dummyTestCases.forEach((tc) => {
      const sid = tc.scenario_id
      if (!map[sid]) map[sid] = []    // scenario_id 기준으로 그룹핑


      map[sid].push({
        id: `${sid}-${map[sid].length + 1}`,
        name: tc.test_case_name,
        input: tc.input_data,
        expect: tc.expected_result,
        preCall: tc.ui_flow,
        status: 'pending'
      })
    })

    testCaseMap.value = map
    console.log("✅ 로딩된 테스트케이스 맵:", Object.keys(testCaseMap.value));
    console.log('✅ 테스트케이스 더미 로딩 완료:', map)
  }

  // 특정 시나리오의 테스트케이스 반환
  function getTestCases(scenarioId) {
    loadDummyTestCases();
  
    const result = testCaseMap.value[scenarioId] || [];
    console.log("🔍 getTestCases:", scenarioId, result);
    return result;

    /*
    // ✅ SpringBoot 연동 시:
    const response = await axios.get(`/api/testcase/scenario/${scenarioId}`)
    testCaseMap.value[scenarioId] = response.data
    return response.data
    */
    
  }

  // 새로 만든 걸 저장하는 함수
  function setTestCases(scenarioId, testCases) {
    testCaseMap.value[scenarioId] = testCases;
  }

  // 시나리오 리스트 각각에 테스트케이스 주입
  function injectTestCasesToScenarios(scenarioList) {
    loadDummyTestCases()
    scenarioList.forEach((scenario) => {
      const testCases = testCaseMap.value[scenario.id] || []
      scenario.testCases = testCases
    })
    console.log('📎 시나리오에 테스트케이스 연결 완료')

    /*
    // ✅ SpringBoot 연동 시 (forEach async 가능):
    for (const scenario of scenarioList) {
      const response = await axios.get(`/api/testcase/scenario/${scenario.id}`)
      scenario.testCases = response.data
      testCaseMap.value[scenario.id] = response.data
    }
    */
  }

  // 선택된 테스트케이스 목록에 대해 코드 생성 (개별용)
  async function generateTestCasesByAI(testCases) {
    console.log("🤖 테스트케이스 생성 요청:", testCases);
  
    try {
      // 예: 실제 API 호출 시
      // const response = await axios.post('/testcases/generate', testCases)
      // return response.data
  
      const generated = testCases.map((tc) => ({
        ...tc,
        // ❌ 테스트코드 생성은 제거
        // generatedCode: undefined,
        status: 'generated',
      }));
  
      // 스토어에 반영
      generated.forEach((newTc) => {
        const sid = newTc.id.split('-').slice(0, 3).join('-');
        const list = testCaseMap.value[sid];
        const index = list?.findIndex((t) => t.id === newTc.id);
        if (index !== -1) {
          list[index] = {
            ...list[index],
            ...newTc,
          };
        }
      });
  
      console.log("✅ 생성된 테스트케이스 수:", generated.length);
      return generated;
    } catch (err) {
      console.error("❌ 테스트케이스 생성 실패", err);
      throw err;
    }
  }

  
// 시나리오 전체에 대해 테스트케이스 생성 후 주입 (전체용)
async function generateAllTestCasesByAI(scenarioList) {
  loadDummyTestCases();
  console.log("🚀 전체 테스트케이스 AI 생성 시작");

  const allGenerated = [];

  for (const scenario of scenarioList) {
    const testCases = testCaseMap.value[scenario.id];
    if (!testCases || testCases.length === 0) {
      console.warn(`⚠️ 시나리오 ${scenario.id}에 할당된 테스트케이스 없음`);
      continue;
    }

    const generated = await generateTestCasesByAI(testCases);
    scenario.testCases = generated;
    allGenerated.push(...generated);
  }

  console.log("✅ 전체 테스트케이스 생성 완료:", allGenerated.length);
  return allGenerated;
}

// 테스트케이스 코드 생성
async function generateCodeForTestCase(testCase) {

  return {
    yaml: `
tests:
  - name: ${testCase.name}
    steps:
      - action: click
        selector: '#example'
    expect:
      - type: visible
        selector: 'text=성공'
    `,
    ts: `// ${testCase.name} 테스트케이스용 TypeScript 코드`,
  };
}


  return {
    testCaseMap,
    loadDummyTestCases,
    getTestCases,
    injectTestCasesToScenarios,
    generateTestCasesByAI,
    generateAllTestCasesByAI,
    setTestCases,
    generateCodeForTestCase,
  }
}
