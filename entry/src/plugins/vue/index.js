import App from '@/App.vue';
import Vue from 'vue';
import { createStore } from '../store'

let store = null;
let instance = null;

/**
 * 创建Vue实例
 * @param {Object} props 
 */
export function createVue(props = { container: '#MainContainer' }) {
  // 初始化成功
  store = createStore();
  instance = new Vue({
    store,
    render: h => h(App),
  });
  instance.$mount(props.container);
}

/**
 * 销毁Vue实例
 */
export function destroyVue() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  store = null;
}
