// src/store/testCaseStore.js
import { ref } from 'vue'
import { useScenarioStore } from './scenarioStore'

// 시나리오 ID별 테스트케이스 맵
const testCaseMap = ref({})

export function useTestCaseStore() {
  // 1. 더미 테스트케이스 직접 정의
  const dummyTestCases = [
    {
      testcase_id: 'SN-USER-001-01',
      scenario_id: 'SN-USER-001',
      ui_flow: '회원가입 페이지 진입 → 모든 필드에 올바른 정보 입력 → \'Register\' 버튼 클릭',
      test_case_name: '회원가입 성공',
      input_data: `{'first_name': 'John', 'last_name': 'Doe', 'email': 'john.doe@example.com', 'phone': '1234567890', 'dob': '1990-01-01', 'street': '123 Main St', 'city': 'Anytown', 'state': 'Anystate', 'country': 'US', 'postal_code': '12345', 'password': 'StrongPassword123!'}`,
      expected_result: `Customer registration`
    },
    {
      testcase_id: 'SN-USER-001-02',
      scenario_id: 'SN-USER-001',
      ui_flow: '회원가입 페이지 진입 → 이메일에 \'johndoe.com\' 입력 → 나머지 필드에 올바른 정보 입력 → \'Register\' 버튼 클릭',
      test_case_name: '회원가입 실패 - 이메일 형식 오류',
      input_data: `{'email': 'johndoe.com', 'password': 'StrongPassword123!'}`,
      expected_result: `Email format is invalid`
    },
  ]

  // 2. 시나리오 ID별로 그룹화하여 맵에 저장
  function loadDummyTestCases() {
    const map = {}

    dummyTestCases.forEach((tc) => {
      const sid = tc.scenario_id
      if (!map[sid]) map[sid] = []
      map[sid].push({
        id: `${sid}-${map[sid].length + 1}`,
        name: tc.test_case,
        input: tc.input_data,
        expect: tc.expected_result,
        status: 'pending'
      })
    })

    testCaseMap.value = map
    console.log('✅ 테스트케이스 더미 로딩 완료:', map)
  }

  function getTestCases(scenarioId) {
    return testCaseMap.value[scenarioId] || []
  }

  return {
    testCaseMap,
    loadDummyTestCases,
    getTestCases
  }
}