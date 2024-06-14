import { createRouter, createWebHistory } from "vue-router";
import Article from "@/components/articles/article.vue";
import Articles from "@/components/articles/index.vue";
import Contact from "@/components/contact/index.vue";
import Home from "@/components/home.vue";
import NotFound from "@/components/404.vue";
import Notify from "@/components/notify.vue";
import Login from "@/components/login.vue";

const propsBack = (route) => {
  return {
    crazy: route.path + "some other data",
  };
};

const checkAuth = () => {
  const isAuth = true;
  if (!isAuth) return "/login";
};

const isAdmin = () => {
  const isAdmin = true;
  if (!isAdmin) return "/";
};

const router = createRouter({
  /**
   *  The import.meta.env object in Vite allows access to various environment variables,
   * providing a way to customize your application's behavior based on the build environment (development, production, etc.)
   */
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/articles",
      component: Articles,
      // PER ROUTE
      beforeEnter: [checkAuth, isAdmin],
    },
    {
      path: "/articles/:articleID",
      component: Article,
      props: propsBack,
    },
    {
      path: "/contact",
      components: {
        default: Contact,
        notify: Notify,
      },
      name: "contact",
    },
    { path: "/", component: Home },
    { path: "/:notFound(.*)", component: NotFound },
    { path: "/login", component: Login },
  ],
  linkActiveClass: "active",
});

// GLOBAL
// router.beforeEach((to, from) => {
//   const isAuth = true;
//   if (to.path === "/") {
//     return true;
//   } else {
//     if (to.path !== "/login" && !isAuth) {
//       return "/login";
//     }
//     if (to.path === "/login" && isAuth) {
//       return "/";
//     }
//     return true;
//   }
// });

// router.afterEach(() => {
//   console.log("after going to the route");
// });

export default router;
