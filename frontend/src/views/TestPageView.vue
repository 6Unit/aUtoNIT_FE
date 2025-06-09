<template>
    <div class="p-4">
      <TestPageComponent
        :scenarioList="scenarioList"
        @run-tests="handleRunTests"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import TestPageComponent from '../components/TestDetail.vue' // ← 이름은 실제 파일명에 맞게 수정
  
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
  
  // ✅ 실행 버튼 클릭 시 이벤트
  function handleRunTests(testcases) {
    console.log("✅ 선택된 테스트케이스 목록:", testcases)
  }
  </script>
  