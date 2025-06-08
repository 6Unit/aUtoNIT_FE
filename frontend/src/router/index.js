import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenerationView from '../views/GenerationView.vue'
import UploadView from '../views/UploadView.vue'
import ReportView from '../views/ReportView.vue'


const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/generation', name: 'Generation', component: GenerationView },
    { path: '/upload', name: 'Upload', component: UploadView },
    { path: '/report', name: 'Report', component: ReportView },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
