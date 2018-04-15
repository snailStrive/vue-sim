import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import article from '../pages/article'
import photo from '../pages/photo'
import my from '../pages/my'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
