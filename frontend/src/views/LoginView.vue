<template>
    <div class="login-page">
      <div class="login-container">
        <!-- 로고 및 제목 섹션 -->
        <div class="header-section">
          <div class="logo">
            <span class="logo-a">a</span><span class="logo-u">U</span><span class="logo-to">to</span><span class="logo-nit">NIT</span>
          </div>
          <h1 class="main-title">AI 기반 UI 테스트 시나리오</h1>
          <h2 class="sub-title">자동 생성 및 실행 플랫폼</h2>
          <p class="description">혁신적인 AI 기술로 테스트 자동화를 경험하세요</p>
        </div>
  
        <!-- 로그인 폼 섹션 -->
        <div class="form-section">
          <div class="form-container">
            <h3 class="form-title">프로젝트 로그인</h3>
            <div class="input-wrapper">
              <input 
                v-model="projectCode" 
                placeholder="프로젝트 코드를 입력하세요"
                class="project-input"
                @keyup.enter="goToHome"
              />
              <div class="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <circle cx="12" cy="16" r="1"></circle>
                  <path d="m7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            </div>
            <button @click="goToHome" class="login-button">
              <span>입장하기</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- 배경 장식 -->
        <div class="bg-decoration">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { loginWithProjectCode } from '../api/auth'
  import "../assets/styles/loginview.css";
  
  const projectCode = ref('')
  const router = useRouter()
  
  async function goToHome() {
    if (!projectCode.value) {
      alert('프로젝트 코드를 입력해주세요')
      return
    }
  
    try {
      const result = await loginWithProjectCode(projectCode.value)
  
      if (result.valid) {
        localStorage.setItem('projectName', result.projectName || '')
        router.push('/home')
      } else {
        alert('유효하지 않은 프로젝트 코드입니다')
      }
    } catch (error) {
      alert('서버 오류가 발생했습니다.')
    }
  }
  </script>