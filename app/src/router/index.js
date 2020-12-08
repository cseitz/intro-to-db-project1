import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotImplemented from '../views/NotImplemented.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/database/hospitals',
    name: 'Hospitals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/database/Hospitals.vue')
  },
  {
    path: '/database/hospital/:id',
    name: 'Hospital',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/database/Hospital.vue')
  },
  {
    path: '/database/hospital/:hospital_id/departments',
    name: 'Departments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/database/Departments.vue')
  },
  {
    path: '/database/patients',
    name: 'Patients',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/database/Patients.vue')
  },
  {
    path: '/database/patient/register',
    name: 'Register Patient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/database/RegisterPatient.vue')
  },
  {
    path: '/database/patient/:id',
    name: 'Patient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/database/Patient.vue')
  },
  {
    path: '/database/physicians',
    name: 'Physicians',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/database/Physicians.vue')
  },
  {
    path: '/database/nurses',
    name: 'Nurses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/database/Nurses.vue')
  },
  {
    path: '/database/physician/:id',
    name: 'Physician',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NotImplemented,
  },
  {
    path: '/database/nurse/:id',
    name: 'Nurse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NotImplemented,
  },
  {
    path: '/database/department/:id',
    name: 'Department',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NotImplemented,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
