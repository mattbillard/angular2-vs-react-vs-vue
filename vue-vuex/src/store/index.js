import Vue from 'vue'
import Vuex from 'vuex'
import articlesModule from './modules/articlesModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    articlesModule
  }
})
