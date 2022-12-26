import { createRouter, createWebHistory } from "vue-router";

import NestesAndJsx from "../views/NestesAndJsx.vue";
import UserProfile from "../views/UserProfile.vue";
import UserPosts from "../views/UserPosts.vue";
import AsyncModule from "../views/AsyncModule.vue";
import TheBasics from "../views/TheBasics.vue";
import PropsyView from "../views/PropsyView.vue";
import { defineAsyncComponent } from "vue";

const CompositionVsOptionAsync = defineAsyncComponent(() => import("../views/CompositionVsOption.vue"));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: CompositionVsOptionAsync,
    },
    {
      path: "/about",
      name: "about",
      component: AsyncModule,
    },
    {
      path: "/user/:id",
      name: "NameWhateverYouWant",
      component: NestesAndJsx,
      children: [
        {
          path: "profile",
          component: UserProfile,
        },
        {
          path: "posts",
          component: UserPosts,
        },
      ],
    },
    {
      path: "/basics",
      name: "basics",
      component: TheBasics,
    },
    {
      path: "/props",
      name: "props",
      component: PropsyView,
    },
  ],
});

export default router;
