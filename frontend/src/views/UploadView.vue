<template>
  <div class="upload-container">
    <!-- Page Header -->
    <div class="page-header">
      <h2>파일 업로드</h2>
      <p class="header-subtitle">테스트 시나리오 생성을 위한 파일들을 업로드하세요</p>
    </div>

    <!-- Upload Grid -->
    <div class="upload-grid">
      <!-- Requirements Upload -->
      <div class="upload-card requirements">
        <div class="card-header">
          <div class="card-icon requirements">
            <img src="../assets/icons/requirements.png" alt="요구사항 아이콘" />
          </div>
          <div class="card-title">
            <h3>요구사항 명세서</h3>
            <p>PDF, DOC, DOCX (최대 20MB)</p>
          </div>
        </div>
        
        <div 
          class="upload-zone"
          :class="{ 'drag-over': isDragOver.requirements, 'has-file': files.requirements }"
          @click="() => triggerFileInput('requirements')"
          @dragover.prevent="handleDragOver('requirements')"
          @dragleave.prevent="handleDragLeave('requirements')"
          @drop.prevent="(e) => handleDrop(e, 'requirements')"
        >
          <div v-if="!files.requirements" class="upload-placeholder">
            <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <span>파일을 드래그하거나 클릭하여 업로드</span>
          </div>
          
          <div v-else class="file-preview">
            <div class="file-info">
              <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <div class="file-details">
                <span class="file-name">{{ files.requirements.name }}</span>
                <span class="file-size">{{ formatFileSize(files.requirements.size) }}</span>
              </div>
            </div>
          </div>
          
          <button v-if="files.requirements" class="remove-btn" @click.stop="removeFile('requirements')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <input 
          ref="requirementsInput"
          type="file" 
          accept=".pdf,.doc,.docx"
          @change="(e) => handleFileSelect(e, 'requirements')"
          style="display: none"
        />
      </div>

      <!-- Source File Upload -->
      <div class="upload-card source">
        <div class="card-header">
          <div class="card-icon source">
            <img src="../assets/icons/sourcecode.png" alt="소스코드 아이콘" />
          </div>
          <div class="card-title">
            <h3>소스코드</h3>
            <p>ZIP 파일 (최대 500MB)</p>
          </div>
        </div>
        
        <div 
          class="upload-zone"
          :class="{ 'drag-over': isDragOver.source, 'has-file': files.source }"
          @click="() => triggerFileInput('source')"
          @dragover.prevent="handleDragOver('source')"
          @dragleave.prevent="handleDragLeave('source')"
          @drop.prevent="(e) => handleDrop(e, 'source')"
        >
          <div v-if="!files.source" class="upload-placeholder">
            <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <span>ZIP 파일을 업로드하세요</span>
          </div>
          
          <div v-else class="file-preview">
            <div class="file-info">
              <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <div class="file-details">
                <span class="file-name">{{ files.source.name }}</span>
                <span class="file-size">{{ formatFileSize(files.source.size) }}</span>
              </div>
            </div>
          </div>
          
          <button v-if="files.source" class="remove-btn" @click.stop="removeFile('source')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <input 
          ref="sourceInput"
          type="file" 
          accept=".zip"
          @change="(e) => handleFileSelect(e, 'source')"
          style="display: none"
        />
      </div>

      <!-- Validation File Upload -->
      <div class="upload-card validation">
        <div class="card-header">
          <div class="card-icon validation">
            <img src="../assets/icons/validation3.png" alt="검증 아이콘" />
          </div>
          <div class="card-title">
            <h3>검증 데이터</h3>
            <p>JSON, XML, TXT (최대 5MB)</p>
          </div>
        </div>
        
        <div 
          class="upload-zone"
          :class="{ 'drag-over': isDragOver.validation, 'has-file': files.validation }"
          @click="() => triggerFileInput('validation')"
          @dragover.prevent="handleDragOver('validation')"
          @dragleave.prevent="handleDragLeave('validation')"
          @drop.prevent="(e) => handleDrop(e, 'validation')"
        >
          <div v-if="!files.validation" class="upload-placeholder">
            <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <span>검증 파일을 업로드하세요</span>
          </div>
          
          <div v-else class="file-preview">
            <div class="file-info">
              <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
              </svg>
              <div class="file-details">
                <span class="file-name">{{ files.validation.name }}</span>
                <span class="file-size">{{ formatFileSize(files.validation.size) }}</span>
              </div>
            </div>
          </div>
          
          <button v-if="files.validation" class="remove-btn" @click.stop="removeFile('validation')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        
        <input 
          ref="validationInput"
          type="file" 
          accept=".json,.xml,.txt"
          @change="(e) => handleFileSelect(e, 'validation')"
          style="display: none"
        />
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="action-section">
      <div class="upload-status">
        <div class="status-item">
          <div class="status-dot" :class="{ active: files.requirements }"></div>
          <span>요구사항 명세서</span>
        </div>
        <div class="status-item">
          <div class="status-dot" :class="{ active: files.source }"></div>
          <span>소스코드</span>
        </div>
        <div class="status-item">
          <div class="status-dot" :class="{ active: files.validation }"></div>
          <span>검증 데이터</span>
        </div>
      </div>
      
      <div class="action-buttons">
        <button class="btn secondary" @click="handleDeleteAll" :disabled="!hasAnyFile">
          전체 삭제
        </button>
        <button class="btn primary" @click="handleStartUpload" :disabled="!hasAnyFile">
          업로드 완료
        </button>
      </div>
    </div>

    <!-- Upload Progress Modal -->
    <div v-if="showUploadModal" class="modal-overlay" @click="closeUploadModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>파일 업로드 중</h3>
          <div class="progress-text">{{ uploadProgress }}%</div>
        </div>
        
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
        </div>
        
        <div class="uploading-files">
          <div v-for="(file, key) in files" :key="key" v-if="file" class="uploading-file">
            <span class="file-name">{{ file.name }}</span>
            <span class="upload-status" :class="uploadStatuses[key]">
              {{ getStatusText(uploadStatuses[key]) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import '../assets/styles/uploadview.css'

// File storage
const files = reactive({
  requirements: null as File | null,
  source: null as File | null,
  validation: null as File | null
})

// Drag and drop states
const isDragOver = reactive({
  requirements: false,
  source: false,
  validation: false
})

// oad modal state
const showUploadModal = ref(false)
const uploadProgress = ref(0)
const uploadStatuses = reactive({
  requirements: 'waiting',
  source: 'waiting', 
  validation: 'waiting'
})

// File input refs
const requirementsInput = ref<HTMLInputElement>()
const sourceInput = ref<HTMLInputElement>()
const validationInput = ref<HTMLInputElement>()

// Computed properties
const hasAnyFile = computed(() => {
  return !!(files.requirements || files.source || files.validation)
})

// File size formatter
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Get status text
const getStatusText = (status: string): string => {
  const statusMap = {
    waiting: '대기중',
    uploading: '업로드 중',
    completed: '완료',
    error: '오류'
  }
  return statusMap[status] || '대기중'
}

// Validate file type and size
const validateFile = (file: File, type: string): boolean => {
  const validations = {
    requirements: {
      types: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      maxSize: 20 * 1024 * 1024, // 20MB
      extensions: ['.pdf', '.doc', '.docx']
    },
    source: {
      types: ['application/zip', 'application/x-zip-compressed'],
      maxSize: 500 * 1024 * 1024, // 500MB
      extensions: ['.zip']
    },
    validation: {
      types: ['application/json', 'application/xml', 'text/xml', 'text/plain'],
      maxSize: 5 * 1024 * 1024, // 5MB
      extensions: ['.json', '.xml', '.txt']
    }
  }

  const validation = validations[type]
  if (!validation) return false

  // Check file size
  if (file.size > validation.maxSize) {
    alert(`파일 크기가 너무 큽니다. 최대 ${formatFileSize(validation.maxSize)}까지 업로드 가능합니다.`)
    return false
  }

  // Check file extension
  const fileName = file.name.toLowerCase()
  const hasValidExtension = validation.extensions.some(ext => fileName.endsWith(ext))
  
  if (!hasValidExtension) {
    alert(`지원하지 않는 파일 형식입니다. ${validation.extensions.join(', ')} 파일만 업로드 가능합니다.`)
    return false
  }

  return true
}

// Trigger file input
const triggerFileInput = (type: string) => {
  const inputMap = {
    requirements: requirementsInput.value,
    source: sourceInput.value,
    validation: validationInput.value
  }
  inputMap[type]?.click()
}

// Handle file selection
const handleFileSelect = (event: Event, type: string) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (file && validateFile(file, type)) {
    files[type] = file
    console.log(`${type} 파일 선택됨:`, file.name)
  }
  
  // Reset input value to allow re-selecting the same file
  target.value = ''
}

// Drag and drop handlers
const handleDragOver = (type: string) => {
  isDragOver[type] = true
}

const handleDragLeave = (type: string) => {
  isDragOver[type] = false
}

const handleDrop = (event: DragEvent, type: string) => {
  isDragOver[type] = false
  const file = event.dataTransfer?.files[0]
  
  if (file && validateFile(file, type)) {
    files[type] = file
    console.log(`${type} 파일 드롭됨:`, file.name)
  }
}

// Remove file
const removeFile = (type: string) => {
  files[type] = null
  uploadStatuses[type] = 'waiting'
  console.log(`${type} 파일 삭제됨`)
}

// Delete all files
const handleDeleteAll = () => {
  if (confirm('모든 파일을 삭제하시겠습니까?')) {
    files.requirements = null
    files.source = null
    files.validation = null
    
    // Reset upload statuses
    uploadStatuses.requirements = 'waiting'
    uploadStatuses.source = 'waiting'
    uploadStatuses.validation = 'waiting'
    
    console.log('모든 파일이 삭제되었습니다.')
  }
}

// Simulate file upload
const simulateUpload = async (file: File, type: string): Promise<void> => {
  return new Promise((resolve) => {
    let progress = 0
    uploadStatuses[type] = 'uploading'
    
    const interval = setInterval(() => {
      progress += Math.random() * 20
      if (progress >= 100) {
        progress = 100
        uploadStatuses[type] = 'completed'
        clearInterval(interval)
        resolve()
      }
    }, 200)
  })
}

// Start upload process
const handleStartUpload = async () => {
  if (!hasAnyFile.value) {
    alert('업로드할 파일을 선택해주세요.')
    return
  }

  showUploadModal.value = true
  uploadProgress.value = 0

  const filesToUpload = Object.entries(files).filter(([_, file]) => file !== null)
  const totalFiles = filesToUpload.length

  for (let i = 0; i < filesToUpload.length; i++) {
    const [type, file] = filesToUpload[i]
    await simulateUpload(file, type)
    uploadProgress.value = Math.round(((i + 1) / totalFiles) * 100)
  }

  setTimeout(() => {
    showUploadModal.value = false
    alert('모든 파일이 성공적으로 업로드되었습니다!')
  }, 1000)
}

// Close upload modal
const closeUploadModal = () => {
  showUploadModal.value = false
}
</script>