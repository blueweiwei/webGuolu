import Vue from 'vue';
import ViewUI from 'view-design';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'view-design/dist/styles/iview.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import axios from 'axios'
import qs from 'qs'

const Base64 = require('js-base64').Base64
Vue.prototype.$qs = qs
Vue.prototype.$axios = axios
Vue.use(VueRouter);
Vue.use(ViewUI);

// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    ViewUI.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    ViewUI.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    Base64,
    render: h => h(App)
});
