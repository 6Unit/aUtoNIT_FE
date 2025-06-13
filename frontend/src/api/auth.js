// import axios from 'axios'  // 추후 백엔드 연동 시 사용

export async function loginWithProjectCode(projectCode) {
    console.log("📡 loginWithProjectCode 실행됨:", projectCode)
    // ✅ 추후 백엔드 연동 (주석만 해제하면 작동 가능)
    /*
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        projectCode: projectCode
      })
  
      return response.data // 예: { valid: true, projectName: 'MyProject' }
    } catch (error) {
      console.error('❌ 로그인 API 호출 실패:', error)
      throw error
    }
    */
  
    // 👉 현재는 더미 응답으로 시뮬레이션
    if (projectCode === '1234') {
        console.log("✅ 조건 만족 - 유효한 코드임")
        const result = { valid: true, projectName: 'Demo Project' }
        console.log("🎯 리턴 직전 값:", result)
        return result
    } else {
        console.log("❌ 유효하지 않은 코드")
        return { valid: false }
    }
  }
  