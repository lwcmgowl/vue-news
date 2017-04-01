/**
 * Created by admin on 2017/3/13.
 */
import List from './components/list.vue'
import Lists from './components/lists.vue'
// 编写路由集合
const routes = [
  {
    name: 'hot', // 路由名，这个字段是可选的
    path: '/hot', // 路由路径，这里是根路径所以是'/'
    component: List // 模板
  },
  {
    name: 'nba', // 路由名，这个字段是可选的
    path: '/nba', // 路由路径，这里是根路径所以是'/'
    component: Lists // 模板
  },
  {
    name: 'cba', // 路由名，这个字段是可选的
    path: '/cba', // 路由路径，这里是根路径所以是'/'
    component: List // 模板
  },
  {
    name: 'pl', // 路由名，这个字段是可选的
    path: '/pl', // 路由路径，这里是根路径所以是'/'
    component: List // 模板
  },
  {
    name: 'laliga', // 路由名，这个字段是可选的
    path: '/laliga', // 路由路径，这里是根路径所以是'/'
    component: List // 模板
  }
]
// 导出路由集合
export default routes
