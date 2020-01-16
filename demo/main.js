import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import App from './app.vue';
import VueBus from './vue-bus.js';

Vue.use(VueRouter);
Vue.use(VueBus);
//配置路由
const Routers = [{
    path: "/index",
    meta: {
      title: "首页"
    },
    component: (resolver) => require(['./views/index.vue'], resolver)
  },
  {
    path: "/about",
    meta: {
      title: "介绍页"
    },
    component: (resolver) => require(['./views/about.vue'], resolver)
  },
  {
    path: "/user/:id",
    meta: {
      title: "用户"
    },
    component: (resolver) => require(['./views/user.vue'], resolver)
  },
  {
    path: "*",
    redirect: "/index"
  }
];

const RouterConfig = {
  mode: 'history',
  routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

new Vue({
  el: "#app",
  router: router,
  render: (h) => {
    return h(App);
  }
});