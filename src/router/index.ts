import { createRouter } from 'uni-mini-router'
// 导入pages.json
import pagesJson from '../pages.json'
// 引入uni-parse-pages
import pagesJsonToRoutes from 'uni-parse-pages'

// 生成路由表
const routes = pagesJsonToRoutes(pagesJson)

const router = createRouter({
  routes: [...routes] // 路由表信息
})

// 全局前置守卫
router.beforeEach((_to, _from, next) => {
  next(true);
})

// 全局后置钩子
router.afterEach((to, from) => {
  console.log('afterEach', to.path, from.path);
})

export default router;