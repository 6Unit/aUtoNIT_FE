// src/store/testCaseStore.js
import { ref } from 'vue'
import { useScenarioStore } from './scenarioStore'

export function useTestCaseStore() {
  const { scenarioList } = useScenarioStore()

  function setTestCases(scenarioId, testCases) {
    console.log('📝 테스트케이스 설정:', scenarioId, testCases)
    
    try {
      // scenarioList에서 해당 시나리오 찾기
      const scenario = scenarioList.value.find(s => s.id === scenarioId)
      
      if (scenario) {
        // 기존 testCases 배열을 새 배열로 교체
        scenario.testCases = [...testCases]
        console.log('✅ 테스트케이스 설정 완료:', scenario.testCases)
      } else {
        console.warn('⚠️ 시나리오를 찾을 수 없음:', scenarioId)
      }
    } catch (error) {
      console.error('❌ 테스트케이스 설정 중 에러:', error)
    }
  }

  function getTestCases(scenarioId) {
    try {
      const scenario = scenarioList.value.find(s => s.id === scenarioId)
      return scenario ? scenario.testCases : []
    } catch (error) {
      console.error('❌ 테스트케이스 조회 중 에러:', error)
      return []
    }
  }

  return {
    setTestCases,
    getTestCases
  }
}