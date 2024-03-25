import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Pricing from "../views/Pricing.vue";
import Dashboard from "../views/Dashoard.vue";
import NotFound from "../views/NotFound.vue";
import Faq from "../components/Faq.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/signup",
      name: "signup",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: Signup,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: Pricing,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/faqs",
      name: "faqs",
      component: Faq,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

router.beforeEach(async (to, from, next) => {
  from;
  const isLoggedIn = !!localStorage.getItem("isLoggedIn");

  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else if (isLoggedIn && to.name === "login") {
    next({ path: "/dashboard" });
  } else {
    next();
  }
});

export default router;
