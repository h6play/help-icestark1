import App from '@/App.vue';
import Vue from 'vue';
import { createStore } from '../store';
import { createRouter } from '../router';

let store = null;
let router = null;
let instance = null;

/**
 * 创建Vue实例
 * @param {Object} props 
 */
export function createVue(props = { container: document.querySelector('#app') }) {
  console.log('Login应用createVue', instance);
  // 初始化成功
  store = createStore();
  router = createRouter();
  instance = new Vue({
    store, router,
    render: h => h(App),
  });
  props.container.innerHTML = ''; 
  instance.$mount(props.container);
  
  // props.container.appendChild(instance.$el);
}

/**
 * 销毁Vue实例
 */
export function destroyVue() {
  console.log('Login应用destroyVue', instance);
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
  store = null;
}

/**
 * 设置webpack的publicPath
 */
export function setWebpackPublicPath() {
  __webpack_public_path__ = process.env.VUE_APP_MICRO_PUBILC_PATH || '/'; // 仅在本地环境调试
}
