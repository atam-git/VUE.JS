import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Blog from "../views/Blog";
import Slug from "../views/Slug";
import postData from "../posts.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    props: { postData },
  },
  {
    path: "/blog/:slug",
    name: "Slug",
    component: Slug,
    props: (route) => ({ slug: route.params.slug, postData }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
