import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Shifts from '../views/Shifts.vue'
import Team from '../views/Team.vue'
import Alerts from '../views/Alerts.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/shifts', component: Shifts },
  { path: '/team', component: Team },
  { path: '/alerts', component: Alerts }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
