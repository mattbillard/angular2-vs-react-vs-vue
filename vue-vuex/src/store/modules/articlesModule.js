import axios from 'axios'

const ARTICLES_URL = `${window.location.protocol}//${window.location.hostname}:3000/api/articles`

const state = {
  articles: [],
  article: {}
}

const actions = {
  deleteArticle (context, payload) {
    console.log('--- store/articles.js: deleteArticle()')
    return axios.delete(`${ARTICLES_URL}/${payload.id}`)
      .then(() => {
        let idx = state.articles.findIndex((article) => article.id === payload.id)
        state.articles.splice(idx, 1)
      })
  },

  getArticles () {
    state.articles = null
    return axios.get(ARTICLES_URL)
      .then(response => {
        state.articles = response.data
      })
  },

  getArticleById (context, payload) {
    state.article = null
    return axios.get(`${ARTICLES_URL}/${payload.id}`)
      .then(response => {
        state.article = response.data
      })
  },

  getNewArticle () {
    state.article = {id: '', title: '', text: ''}
  },

  saveArticle (context, payload) {
    if (payload.article.id) {
      return axios.put(`${ARTICLES_URL}/${payload.article.id}`, payload.article)
    } else {
      return axios.post(ARTICLES_URL, payload.article)
    }
  }
}

export default {
  state,
  actions
}
