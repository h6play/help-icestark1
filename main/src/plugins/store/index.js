import Vuex from 'vuex';

/**
 * 创建存储插件
 * @returns {Vuex.Store}
 */
export function createStore() {
  const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
  });
  return store;
}
