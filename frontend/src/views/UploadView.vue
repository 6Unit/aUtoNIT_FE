<template>
  <div class="upload-container">
    <!-- Page Header -->
    <div class="page-header">
      <h2>업로드</h2>
    </div>

    <!-- Upload Sections -->
    <div class="upload-sections">
      <!-- Requirements Upload -->
      <div class="upload-section">
        <h3>요구사항명세서 업로드</h3>
        <div 
          class="upload-area"
          :class="{ 'drag-over': isDragOver.requirements }"
          @click="() => triggerFileInput('requirements')"
          @dragover.prevent="handleDragOver('requirements')"
          @dragleave.prevent="handleDragLeave('requirements')"
          @drop.prevent="(e) => handleDrop(e, 'requirements')"
        >
          <div class="upload-content">
            <span class="upload-icon">📁</span>
            <span class="upload-text">파일을 드래그하거나 클릭하여 업로드</span>
          </div>
          <div class="upload-formats">지원 형식: PDF, DOC, DOCX (최대 20MB)</div>
        </div>
        <input 
          ref="requirementsInput"
          type="file" 
          accept=".pdf,.doc,.docx"
          @change="(e) => handleFileSelect(e, 'requirements')"
          style="display: none"
        />
        <div v-if="files.requirements" class="progress-line green"></div>
        <div v-if="files.requirements" class="file-info">
          <span class="file-name">{{ files.requirements.name }} ({{ formatFileSize(files.requirements.size) }})</span>
          <button class="delete-btn" @click="removeFile('requirements')">✕</button>
        </div>
      </div>

      <!-- Source File Upload -->
      <div class="upload-section">
        <h3>소스파일 업로드 (ZIP)</h3>
        <div 
          class="upload-area"
          :class="{ 'drag-over': isDragOver.source }"
          @click="() => triggerFileInput('source')"
          @dragover.prevent="handleDragOver('source')"
          @dragleave.prevent="handleDragLeave('source')"
          @drop.prevent="(e) => handleDrop(e, 'source')"
        >
          <div class="upload-content">
            <span class="upload-icon">📦</span>
            <span class="upload-text">ZIP 파일을 드래그하거나 클릭하여 업로드</span>
          </div>
          <div class="upload-formats">지원 형식: ZIP (최대 500MB)</div>
        </div>
        <input 
          ref="sourceInput"
          type="file" 
          accept=".zip"
          @change="(e) => handleFileSelect(e, 'source')"
          style="display: none"
        />
        <div v-if="files.source" class="success-message">
          <span class="success-text">✅ {{ files.source.name }} ({{ formatFileSize(files.source.size) }}) 업로드 완료</span>
          <button class="delete-btn" @click="removeFile('source')">✕</button>
        </div>
      </div>

      <!-- Validation File Upload -->
      <div class="upload-section">
        <h3>Validation 파일 업로드</h3>
        <div 
          class="upload-area"
          :class="{ 'drag-over': isDragOver.validation }"
          @click="() => triggerFileInput('validation')"
          @dragover.prevent="handleDragOver('validation')"
          @dragleave.prevent="handleDragLeave('validation')"
          @drop.prevent="(e) => handleDrop(e, 'validation')"
        >
          <div class="upload-content">
            <span class="upload-icon">📋</span>
            <span class="upload-text">검증 파일을 드래그하거나 클릭하여 업로드</span>
          </div>
          <div class="upload-formats">지원 형식: JSON, XML, TXT (최대 5MB)</div>
        </div>
        <input 
          ref="validationInput"
          type="file" 
          accept=".json,.xml,.txt"
          @change="(e) => handleFileSelect(e, 'validation')"
          style="display: none"
        />
        <div v-if="files.validation" class="progress-line yellow"></div>
        <div v-if="files.validation" class="file-info">
          <span class="file-name">{{ files.validation.name }} ({{ formatFileSize(files.validation.size) }})</span>
          <button class="delete-btn" @click="removeFile('validation')">✕</button>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="action-section">
      <div class="action-buttons">
        <button class="action-btn gray" @click="handleDeleteAll" :disabled="!hasAnyFile">전체 삭제</button>
        <button class="action-btn green" @click="handleStartUpload" :disabled="!hasAnyFile">업로드 시작</button>
        <button class="action-btn blue" @click="handleValidation" :disabled="!files.validation">검증 실행</button>
      </div>
      <div class="status-info">
        <div class="status-item">• 요구사항명세서: {{ getFileStatus('requirements') }}</div>
        <div class="status-item">• 소스파일: {{ getFileStatus('source') }}</div>
        <div class="status-item">• Validation 파일: {{ getFileStatus('validation') }}</div>
      </div>
    </div>

    <!-- Info Message -->
    <div class="info-message">
      <span class="info-icon">💡</span>
      <span class="info-text">모든 파일 업로드 완료 후 저장 버튼을 클릭하여 프로젝트를 저장하세요.</span>
    </div>

    <!-- Upload Progress Modal -->
    <div v-if="showUploadModal" class="modal-overlay" @click="closeUploadModal">
      <div class="modal-content" @click.stop>
        <h3>파일 업로드 중...</h3>
        <div class="upload-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
          </div>
          <div class="progress-text">{{ uploadProgress }}%</div>
        </div>
        <div class="uploading-files">
          <div v-for="(file, key) in files" :key="key" class="uploading-file">
            <span>{{ file.name }}</span>
            <span class="upload-status">{{ uploadStatuses[key] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

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

// Upload modal state
const showUploadModal = ref(false)
const uploadProgress = ref(0)
const uploadStatuses = reactive({
  requirements: '대기중',
  source: '대기중', 
  validation: '대기중'
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

// Get file status
const getFileStatus = (type: string): string => {
  if (files[type]) {
    return '업로드 완료'
  }
  return '대기중'
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
  uploadStatuses[type] = '대기중'
  console.log(`${type} 파일 삭제됨`)
}

// Delete all files
const handleDeleteAll = () => {
  if (confirm('모든 파일을 삭제하시겠습니까?')) {
    files.requirements = null
    files.source = null
    files.validation = null
    
    // Reset upload statuses
    uploadStatuses.requirements = '대기중'
    uploadStatuses.source = '대기중'
    uploadStatuses.validation = '대기중'
    
    console.log('모든 파일이 삭제되었습니다.')
  }
}

// Simulate file upload
const simulateUpload = async (file: File, type: string): Promise<void> => {
  return new Promise((resolve) => {
    let progress = 0
    uploadStatuses[type] = '업로드 중...'
    
    const interval = setInterval(() => {
      progress += Math.random() * 20
      if (progress >= 100) {
        progress = 100
        uploadStatuses[type] = '완료'
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

// Handle validation
const handleValidation = () => {
  if (!files.validation) {
    alert('검증할 파일을 먼저 업로드해주세요.')
    return
  }

  // Simulate validation process
  const validationResult = Math.random() > 0.5
  
  setTimeout(() => {
    if (validationResult) {
      alert('✅ 파일 검증이 성공적으로 완료되었습니다!')
    } else {
      alert('❌ 파일 검증에 실패했습니다. 파일을 확인해주세요.')
    }
  }, 1500)
  
  console.log('검증 실행 중...')
}

// Close upload modal
const closeUploadModal = () => {
  showUploadModal.value = false
}
</script>

<style scoped>
.upload-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 30px;
  box-sizing: border-box;
  overflow-x: hidden;
}

/* Page Header */
.page-header {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 15px 25px;
  margin-bottom: 25px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.page-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #4b5563;
}

/* Upload Sections */
.upload-sections {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
}

.upload-section {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.upload-section:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.upload-section h3 {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: bold;
  color: #374151;
}

.upload-area {
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  background: #f9fafb;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.upload-area:hover {
  border-color: #3b82f6;
  background: #eff6ff;
  transform: translateY(-2px);
}

.upload-area.drag-over {
  border-color: #10b981;
  background: #ecfdf5;
  transform: scale(1.02);
}

.upload-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}

.upload-icon {
  font-size: 20px;
}

.upload-text {
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.upload-formats {
  font-size: 12px;
  color: #9ca3af;
}

/* Progress Lines */
.progress-line {
  height: 3px;
  margin-top: 20px;
  border-radius: 2px;
  animation: pulse 2s infinite;
}

.progress-line.green {
  background: linear-gradient(90deg, #10b981, #34d399);
}

.progress-line.yellow {
  background: linear-gradient(90deg, #f59e0b, #fbbf24);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* File Info */
.file-info {
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 12px 16px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.file-name {
  font-size: 13px;
  color: #374151;
  font-weight: 500;
}

/* Success Message */
.success-message {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  border: 1px solid #10b981;
  border-radius: 8px;
  padding: 15px 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.success-text {
  font-size: 13px;
  color: #065f46;
  font-weight: 500;
}

.delete-btn {
  background: none;
  border: none;
  color: #dc2626;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.delete-btn:hover {
  background: #fee2e2;
  color: #991b1b;
  transform: scale(1.1);
}

/* Action Section */
.action-section {
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.action-buttons {
  display: flex;
  gap: 15px;
}

.action-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.action-btn:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.action-btn.gray {
  background: linear-gradient(135deg, #6b7280, #4b5563);
}

.action-btn.green {
  background: linear-gradient(135deg, #10b981, #059669);
}

.action-btn.blue {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.status-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.status-item {
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;
}

/* Info Message */
.info-message {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.info-icon {
  font-size: 16px;
}

.info-text {
  font-size: 13px;
  color: #92400e;
  font-weight: 500;
}

/* Upload Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  max-width: 90vw;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.modal-content h3 {
  margin: 0 0 20px 0;
  font-size: 18px;
  font-weight: bold;
  color: #374151;
  text-align: center;
}

.upload-progress {
  margin-bottom: 20px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.uploading-files {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.uploading-file {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: #f9fafb;
  border-radius: 6px;
  font-size: 12px;
}

.upload-status {
  color: #6b7280;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .upload-container {
    padding: 20px;
  }
  
  .action-section {
    flex-direction: column;
    gap: 20px;
  }
  
  .action-buttons {
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
  }
  
  .action-btn {
    flex: 1;
    min-width: 120px;
  }
  
  .upload-content {
    flex-direction: column;
    gap: 8px;
  }
  
  .modal-content {
    width: 350px;
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .upload-container {
    padding: 15px;
  }
  
  .upload-section {
    padding: 20px;
  }
  
  .upload-area {
    padding: 20px;
  }
  
  .action-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .action-btn {
    width: 100%;
  }
}

/* Global body styles to prevent horizontal scroll */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>