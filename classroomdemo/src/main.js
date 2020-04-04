import Vue from "vue";
import store from '@/store/index'
import router from '@/router/index'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import './style/_normalize.scss'
import App from "./App.vue";
import { installCardDragger } from "carddragger"; //拖拽插件
Vue.use(installCardDragger);
Vue.use(ElementUI);
Vue.config.productionTip = false
// 这个地方写请求拦截 请求请用axios
new Vue({
  el: "#app",
   router,
   store,
  render: h => h(App)
});
