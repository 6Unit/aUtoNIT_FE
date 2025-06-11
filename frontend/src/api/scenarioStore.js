// src/api/scenarioStore.js
import { ref } from 'vue'
// import axios from 'axios'  // 추후 SpringBoot 연동 시 사용

const scenarioList = ref([])

export function useScenarioStore() {
  // 🔥 AI가 파일 분석해서 시나리오 생성
  async function generateNewScenarios(files) {
    console.log("🤖 generateNewScenarios() 실행됨 - AI 시나리오 생성 요청")
    console.log("📁 분석할 파일들:", files)
    
    try {
      // SpringBoot API 호출 - AI가 파일을 분석해서 시나리오 생성
      /*
      const formData = new FormData()
      formData.append('requirement', files.requirement)
      formData.append('source', files.source)  
      formData.append('validation', files.validation)
      
      const response = await axios.post('/api/scenarios/generate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      
      console.log("✅ AI 시나리오 생성 API 호출 완료")
      return response.data
      */
      
      console.log("✅ AI 시나리오 생성 완료 (백엔드에 저장됨)")
      return true
      
    } catch (error) {
      console.error('❌ AI 시나리오 생성 실패:', error)
      throw error
    }
  }

  // 🔥 백엔드에서 생성된 시나리오 가져오기
  async function loadScenarios() {
    console.log("📡 loadScenarios() 실행됨 - 백엔드에서 시나리오 조회")
    
    try {
      // SpringBoot API 호출 - 생성된 시나리오 조회
      /*
      const response = await axios.get('/api/scenarios')
      scenarioList.value = response.data
      console.log("✅ 백엔드에서 시나리오 로드됨:", response.data.length, "개")
      */

      // 현재는 더미데이터로 시뮬레이션
      const loadedScenarios = generateDummyScenarios()
      scenarioList.value = loadedScenarios
      
      console.log("✅ 시나리오 로드 완료, 길이:", scenarioList.value.length)
      console.log("🎯 첫 번째 시나리오:", scenarioList.value[0])
      return scenarioList.value
      
    } catch (error) {
      console.error('❌ 시나리오 로딩 실패:', error)
      scenarioList.value = []
      throw error
    }
  }

  // 🔥 사용자 정의 시나리오 추가
  async function addCustomScenario(scenarioData) {
    console.log("🚀 addCustomScenario() 실행됨 - 데이터:", scenarioData)
    
    try {
      // SpringBoot API 호출 (새 시나리오 추가)
      /*
      const response = await axios.post('/api/scenarios', scenarioData)
      const newScenario = response.data
      scenarioList.value.push(newScenario)
      console.log("✅ 새 시나리오 추가 완료:", newScenario)
      */

      // 현재는 더미데이터 - 새 ID 생성 후 추가
      const newId = `SN-USER-${String(scenarioList.value.length + 1).padStart(3, '0')}`
      const newScenario = {
        id: newId,
        name: scenarioData.name,
        description: scenarioData.description,
        group: scenarioData.group || '사용자 정의 시나리오',
        testCases: [],
        isCustom: true // 사용자가 추가한 것임을 표시
      }
      
      // 배열에 추가
      scenarioList.value.push(newScenario)
      
      console.log("✅ 사용자 정의 시나리오 추가 완료:", newScenario)
      console.log("📊 현재 총 시나리오 개수:", scenarioList.value.length)
      
      return newScenario
      
    } catch (error) {
      console.error('❌ 시나리오 추가 실패:', error)
      throw error
    }
  }

  // 🔥 더미 데이터 생성 함수 (실제 API 연동 시에는 제거)
  function generateDummyScenarios() {
    console.log("🎲 더미 시나리오 생성 중...")
    
    const scenarios = [
      {
        id: 'SN-USER-001',
        name: '회원가입 및 로그인 시나리오',
        description: '회원가입 페이지 이동 → 정보 입력 → 회원가입 완료 → 로그인 페이지 이동 → 정보 입력 → 로그인 완료',
        group: '사용자 시나리오',
        testCases: []
      },
      {
        id: 'SN-USER-002',
        name: '프로필 조회 및 수정 시나리오',
        description: '로그인 → 프로필 조회 선택 → 프로필 정보 확인 → 프로필 수정 선택 → 정보 수정 → 수정 완료',
        group: '사용자 시나리오',
        testCases: []
      },
      {
        id: 'SN-USER-003',
        name: '관심 상품 관리 시나리오',
        description: '로그인 → 관심 상품 조회 선택 → 관심 상품 정보 확인 → 관심 상품 삭제 선택 → 삭제 완료',
        group: '사용자 시나리오',
        testCases: []
      },
      {
        id: 'SN-USER-004',
        name: '장바구니 관리 및 상품 구매 시나리오',
        description: '로그인 → 상품 검색 → 상품 상세 정보 확인 → 장바구니 추가 → 장바구니 조회 → 상품 수량 변경 → 상품 구매',
        group: '사용자 시나리오',
        testCases: []
      },
      {
        id: 'SN-USER-005',
        name: '문의하기 및 문의 내역 조회 시나리오',
        description: '로그인 → 문의하기 선택 → 메시지 입력 → 메시지 전송 → 문의 내역 조회 선택 → 메시지 확인',
        group: '사용자 시나리오',
        testCases: []
      },
      {
        id: 'SN-USER-006',
        name: '언어 변경 시나리오',
        description: '로그인 → 언어 변경 선택 → 원하는 언어 선택 → 언어 변경 완료',
        group: '사용자 시나리오',
        testCases: []
      },
      {
        id: 'SN-ADMIN-001',
        name: '관리자 로그인 및 주문 관리 시나리오',
        description: '관리자 로그인 → 최근 주문 목록 조회 → 주문 상세 정보 확인 → 배송 상태 수정',
        group: '관리자 시나리오',
        testCases: []
      },
      {
        id: 'SN-ADMIN-002',
        name: '브랜드 및 카테고리 관리 시나리오',
        description: '관리자 로그인 → 브랜드 조회 → 브랜드 추가 → 브랜드 수정 → 브랜드 삭제 → 카테고리 조회 → 카테고리 추가 → 카테고리 수정 → 카테고리 삭제',
        group: '관리자 시나리오',
        testCases: []
      },
      {
        id: 'SN-ADMIN-003',
        name: '상품 및 이용자 관리 시나리오',
        description: '관리자 로그인 → 상품 조회 → 상품 추가 → 상품 수정 → 상품 삭제 → 이용자 조회 → 이용자 추가 → 이용자 수정 → 이용자 삭제',
        group: '관리자 시나리오',
        testCases: []
      },
      {
        id: 'SN-ADMIN-004',
        name: '통계 정보 및 메시지 관리 시나리오',
        description: '관리자 로그인 → 통계 정보 조회 → 메시지 조회 → 문의하기 선택 → 메시지 입력 → 메시지 전송',
        group: '관리자 시나리오',
        testCases: []
      }
    ];
    
    console.log("🎲 더미 시나리오 생성 완료, 개수:", scenarios.length)
    return scenarios
  }

  // 시나리오 수정 기능 추가
  async function updateScenario(scenarioId, updatedData) {
    console.log("✏️ updateScenario() 실행됨 - ID:", scenarioId, "데이터:", updatedData)
    
    try {
      // SpringBoot API 호출 (시나리오 수정)
      /*
      const response = await axios.put(`/api/scenarios/${scenarioId}`, updatedData)
      const updatedScenario = response.data
      
      // 로컬 상태에서도 업데이트
      const index = scenarioList.value.findIndex(s => s.id === scenarioId)
      if (index !== -1) {
        scenarioList.value[index] = updatedScenario
      }
      
      console.log("✅ 시나리오 수정 완료:", updatedScenario)
      return updatedScenario
      */

      // 현재는 더미데이터 - 로컬에서만 수정
      const scenario = scenarioList.value.find(s => s.id === scenarioId)
      if (scenario) {
        // 기존 데이터 유지하면서 업데이트
        Object.assign(scenario, {
          name: updatedData.name,
          description: updatedData.description,
          updatedAt: new Date().toISOString() // 수정 시간 추가
        })
        
        console.log("✅ 시나리오 수정 완료 (로컬):", scenario)
        return scenario
      } else {
        throw new Error(`시나리오를 찾을 수 없습니다: ${scenarioId}`)
      }
      
    } catch (error) {
      console.error('❌ 시나리오 수정 실패:', error)
      throw error
    }
  }

  return {
    scenarioList,
    loadScenarios,        // 백엔드에서 시나리오 가져오기
    generateNewScenarios, // AI가 시나리오 생성하기
    addCustomScenario,    // 사용자 정의 시나리오 추가
    updateScenario,       // 시나리오 수정
  }
}