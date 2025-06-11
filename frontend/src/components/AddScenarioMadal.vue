<template>
    <!-- 모달 배경 -->
    <div v-if="show" class="modal-backdrop" @click="closeModal">
      <!-- 모달 컨텐츠 -->
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h4 class="modal-title">새 시나리오 추가</h4>
          <button class="btn-close" @click="closeModal">✕</button>
        </div>
  
        <div class="modal-body">
          <form @submit.prevent="submitScenario">
            <!-- 시나리오 이름 -->
            <div class="form-group mb-3">
              <label for="scenarioName" class="form-label">시나리오 이름 *</label>
              <input
                id="scenarioName"
                v-model="formData.name"
                type="text"
                class="form-control"
                placeholder="예: 상품 검색 및 주문 시나리오"
                required
              />
            </div>
  
            <!-- 시나리오 설명 -->
            <div class="form-group mb-3">
              <label for="scenarioDescription" class="form-label">시나리오 설명 *</label>
              <textarea
                id="scenarioDescription"
                v-model="formData.description"
                class="form-control"
                rows="4"
                placeholder="예: 사용자가 상품을 검색하고 장바구니에 담은 후 주문을 완료하는 전체 흐름을 검증합니다."
                required
              ></textarea>
            </div>
  
  
  
            <!-- 버튼들 -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">
                취소
              </button>
              <button type="submit" class="btn btn-primary" :disabled="!isFormValid">
                시나리오 추가
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  
  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    }
  })
  
  const emit = defineEmits(['close', 'submit'])
  
  // 폼 데이터
  const formData = ref({
    name: '',
    description: ''
  })
  
  // 폼 유효성 검사
  const isFormValid = computed(() => {
    return formData.value.name.trim() && formData.value.description.trim()
  })
  
  // 모달이 열릴 때마다 폼 초기화
  watch(() => props.show, (newVal) => {
    if (newVal) {
      resetForm()
    }
  })
  
  function resetForm() {
    formData.value = {
      name: '',
      description: ''
    }
  }
  
  function closeModal() {
    emit('close')
  }
  
  function submitScenario() {
    if (isFormValid.value) {
      emit('submit', { ...formData.value })
      closeModal()
    }
  }
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    width: 90%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e9ecef;
  }
  
  .modal-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .btn-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn-close:hover {
    color: #000;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }
  
  .form-control {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.875rem;
  }
  
  .form-control:focus {
    outline: none;
    border-color: #0d6efd;
    box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.25);
  }
  
  .modal-footer {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.15s;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
  }
  
  .btn-primary {
    background-color: #0d6efd;
    color: white;
  }
  
  .btn-primary:hover:not(:disabled) {
    background-color: #0b5ed7;
  }
  
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  </style>