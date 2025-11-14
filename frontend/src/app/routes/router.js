import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("@/pages/home/ui/homePage.vue");
const LoginPage = () => import("@/pages/login/ui/LoginPage.vue");
const RegisterPage = () => import("@/pages/register/ui/RegisterPage.vue");
const ProfilePage = () => import("@/pages/profile/ui/ProfilePage.vue");

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutPage
    // }
  ],
});
