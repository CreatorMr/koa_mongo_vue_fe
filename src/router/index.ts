import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Article.vue')
  },
  {
    path: "/timeline",
    name: "timeline",
    component: () =>
      import(/* webpackChunkName: "timeline" */ "../views/timeline.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/articleDetail",
    name: "ArticleDetail",
    component: () =>
      import(/* webpackChunkName: "articleDetail" */ "../views/articleDetail.vue")
  },
  {
    path: "/tags",
    name: "Tags",
    component: () =>
      import(/* webpackChunkName: "articleDetail" */ "../views/Tags.vue")
  },
  {
    path: "/category",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "articleDetail" */ "../views/Category.vue")
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
