import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Project from '@/views/Project.vue';

// 404 sahifasi qo'shish (optional)
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Project },
  { path: '/:catchAll(.*)', component: NotFound }, // 404 sahifasi
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});




export default router;
