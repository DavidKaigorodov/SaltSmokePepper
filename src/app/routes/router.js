import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../../pages/home/ui/homePage.vue')
// const SignInPage = () => import('@/pages/sign-in/SignInPage.vue')

// const AboutPage = () => import('@/pages/about/AboutPage.vue')


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/home', 
      name: 'home', 
      component: HomePage 
    },
    // { 
    //   path: '/sign-in/', 
    //   name: 'sign-in', 
    //   component: SignInPage,
    // },
    // { 
    //   path: '/about', 
    //   name: 'about', 
    //   component: AboutPage 
    // }
  ]
})