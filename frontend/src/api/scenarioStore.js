// src/composables/useScenarioStore.js
import { ref } from 'vue'
// import axios from 'axios'  // 추후 SpringBoot 연동 시 사용

const scenarioList = ref([])

export function useScenarioStore() {
  async function loadScenarios() {
    console.log("🚀 loadScenarios() 실행됨")
    console.log("🔍 현재 scenarioList.value:", scenarioList.value)
    
    try {
      // SpringBoot 연동 시 사용할 코드
      /*
      const response = await axios.get('/api/scenarios')
      scenarioList.value = response.data
      console.log("✅ 백엔드에서 시나리오 로드됨:", response.data)
      */

      // 현재는 더미데이터
      const dummyData = [
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
      
      // 🔥 중요: 즉시 할당하고 검증
      console.log("📝 dummyData 준비 완료, 길이:", dummyData.length);
      
      // scenarioList에 할당
      scenarioList.value = dummyData;
      
      return scenarioList.value;
      
    } catch (error) {
      console.error('❌ 시나리오 로딩 실패:', error);
      scenarioList.value = []; // 에러 시 빈 배열로 초기화
    }
  }

  return {
    scenarioList,
    loadScenarios,
  }
}