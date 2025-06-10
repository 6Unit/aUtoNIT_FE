<template>
    <div class="p-4">
      <TestPageComponent
        :scenarioList="scenarioList"
        :testResults="testResults"
        :isRunning="isRunning"
        @run-tests="handleRunTests"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import TestPageComponent from '../components/TestDetail.vue'
  
  // ✅ [임시] 더미 시나리오 데이터 (API 연동 전까지 사용)
  const scenarioList = ref([
    {
      id: 1,
      name: "회원가입 시나리오",
      description: "회원가입 과정을 검증하는 시나리오입니다.",
      testCases: [
        { id: 1, name: "이메일 형식 확인" },
        { id: 2, name: "비밀번호 유효성 검사" },
        { id: 3, name: "회원가입 성공 시 리다이렉트 확인" }
      ]
    },
    {
      id: 2,
      name: "로그인 시나리오",
      description: "로그인 동작을 테스트하는 시나리오입니다.",
      testCases: [
        { id: 1, name: "정상 로그인" },
        { id: 2, name: "이메일 미입력 시 오류" }
      ]
    }
  ])
  
  // ✅ 테스트 실행 결과 저장
  const testResults = ref({})
  const isRunning = ref(false)
  
  // ✅ 실행 버튼 클릭 시 이벤트
  async function handleRunTests(testcases) {
    console.log("✅ 선택된 테스트케이스 목록:", testcases)
    
    if (testcases.length === 0) {
      alert("실행할 테스트케이스를 선택해주세요.")
      return
    }
    
    isRunning.value = true
    
    // 선택된 테스트케이스들을 실행 중 상태로 초기화
    testcases.forEach(tc => {
      const key = `${tc.scenarioId}_${tc.id}`
      testResults.value[key] = {
        status: 'running',
        message: '테스트 실행 중...',
        duration: 0,
        timestamp: new Date().toISOString()
      }
    })
    
    // 각 테스트케이스를 순차적으로 실행 (실제로는 playwright 실행)
    for (const tc of testcases) {
      const key = `${tc.scenarioId}_${tc.id}`
      
      try {
        // 실제 playwright 실행 시뮬레이션 (2-4초 랜덤 대기)
        const duration = Math.random() * 2000 + 2000
        await new Promise(resolve => setTimeout(resolve, duration))
        
        // 80% 확률로 성공, 20% 확률로 실패 (데모용)
        const isSuccess = Math.random() > 0.2
        
        testResults.value[key] = {
          status: isSuccess ? 'success' : 'failed',
          message: isSuccess 
            ? `테스트가 성공적으로 완료되었습니다.`
            : `테스트 실행 중 오류가 발생했습니다: ${getRandomError()}`,
          duration: Math.round(duration),
          timestamp: new Date().toISOString(),
          logs: isSuccess ? getSuccessLog(tc.name) : getFailureLog(tc.name)
        }
      } catch (error) {
        testResults.value[key] = {
          status: 'failed',
          message: `테스트 실행 중 예외가 발생했습니다: ${error.message}`,
          duration: 0,
          timestamp: new Date().toISOString(),
          logs: [`ERROR: ${error.message}`]
        }
      }
    }
    
    isRunning.value = false
  }
  
  // 데모용 랜덤 에러 메시지
  function getRandomError() {
    const errors = [
      "요소를 찾을 수 없습니다",
      "타임아웃이 발생했습니다",
      "네트워크 연결 오류",
      "예상된 텍스트와 다릅니다",
      "페이지 로딩 실패"
    ]
    return errors[Math.floor(Math.random() * errors.length)]
  }
  
  // 성공 로그 생성
  function getSuccessLog(testName) {
    return [
      `✅ ${testName} 테스트 시작`,
      `📄 페이지 로딩 완료`,
      `🖱️ 요소 클릭 완료`,
      `✅ 예상 결과와 일치`,
      `✅ ${testName} 테스트 완료`
    ]
  }
  
  // 실패 로그 생성
  function getFailureLog(testName) {
    return [
      `🚀 ${testName} 테스트 시작`,
      `📄 페이지 로딩 완료`,
      `🖱️ 요소 클릭 시도`,
      `❌ 요소를 찾을 수 없음`,
      `❌ ${testName} 테스트 실패`
    ]
  }
  </script>