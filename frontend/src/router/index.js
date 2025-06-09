import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenerationView from '../views/GenerationView.vue'
import UploadView from '../views/UploadView.vue'
import ReportView from '../views/ReportView.vue'
import TestPageView from '../views/TestPageView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/upload', name: 'Upload', component: UploadView },
    { path: '/generation', name: 'Generation', component: GenerationView },
    { path: '/testpage', name: 'TestPage', component: TestPageView },
    { path: '/report', name: 'Report', component: ReportView },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
