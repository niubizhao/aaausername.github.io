import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import NotFound from '@/pages/errorPage/404'
import Forbidden from '@/pages/errorPage/403'
import Layout from '@/pages/layout/index'
import MainContent from '@/pages/layout/component/main-content/index.vue'
import MainContent1 from '@/pages/layout/component/main-content/index1.vue'

Vue.use(Router)

/* 初始路由 */
export default new Router({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    {
      path: "/layout",
      component: Layout,
      children: [
        { path: "", redirect: "maincontent", component: MainContent },
        { path: "maincontent", name: "maincontent", component: MainContent },
        { path: "maincontent1", name: "教室002", component: MainContent1 }
      ]
    },
    {
      path: "/403",
      component: Forbidden
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});
