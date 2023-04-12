import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage/MainPage.vue";
import People from '../components/PeoplePage/PeoplePage.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
        path: "/people/:id",
        name:"people",
        component: People
    },
  ],
});

export default router;
