import Router from 'vue-router';
import routes from '@/config/routes';
import { getBasename } from '@ice/stark-app';

/**
 * 生成菜单序列
 * @param  {} itemRoute
 */
const makeMenus = (itemRoutes) => {
  let list = [];
  itemRoutes.forEach(item => {
    if (item.children) {
      list.push({ ...item, component: null, children: makeMenus(item.children) });
    } else {
      list.push({...item, component: null});
    }
  });
  return list;
};

/**
 * 生成Vue一级路由
 * @param  {Array} itemRoutes
 * @param  {Array} urlStack
 */
const makeRoutes = (itemRoutes, urlStack) => {
  let list = [];
  itemRoutes.forEach(item => {
    if (item.children) {
      urlStack.push(item);
      list = list.concat(makeRoutes(item.children, urlStack));
      urlStack.pop();
    } else {
      const newItem = {...item};
      newItem.meta.breadcrumb = urlStack.map(urlItem => {
        return { path: urlItem.path, name: urlItem.name, title: urlItem.meta.title };
      });
      newItem.meta.breadcrumb.push({ path: newItem.path, name: newItem.name, title: newItem.meta.title });
      list.push(newItem);
    }
  });
  return list;
};

/**
 * 获取菜单
 * @returns {Array}
 */
export function getMenus() {
  return makeMenus(routes);
}

/**
 * 获取路由
 * @returns {Array}
 */
export function getRoutes() {
  return makeRoutes(routes, []);
}

/**
 * 创建路由
 * @returns {VueRouter}
 */
export function createRouter() {
  /* 路由定义 */
  const router = new Router({
    mode: 'history',
    base: getBasename(),
    routes,
  });

  // 处理点击当前菜单项路由时，报错问题
  const originalPush = Router.prototype.push;
  Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
  };

  /* 路由拦截 */
  router.beforeEach(async (to, from, next) => {
    // 设置网页标题
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    // 判断匹配路由结果
    if (to.matched.length === 0) {
      next(to.name ? { name: to.name } : { name: '/' });
      return;
    }
    next();
  });
  return router;
}


