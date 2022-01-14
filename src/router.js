import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import contactPage from './components/Contact.vue';
import profilePage from './components/Profile.vue';

const routes = [
  { path: '/', name: 'profile', component: profilePage },
  { path: '/contact', name: 'contact', component: contactPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
