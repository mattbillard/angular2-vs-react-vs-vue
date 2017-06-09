import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/modules/articles/components/Article'
import Articles from '@/modules/articles/components/Articles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/articles', component: Articles },
    { path: '/article', component: Article },
    { path: '/article/:id', component: Article },
    { path: '*', redirect: '/articles' }
  ]
})
