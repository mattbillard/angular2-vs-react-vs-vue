<template>
  <div>
    <h1>Articles</h1>

    <router-link to="/article" class="btn btn-primary">Create</router-link>
    <br><br>

    <table class="table">
      <thead>
        <tr>
          <th>Article</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles">
          <td>
            <router-link :to="{ path: '/article/'+article.id}">
              {{article.id}}
              {{article.title}}
            </router-link>
          </td>
          <td>
            <a href="" v-on:click="deleteArticle(article); $event.preventDefault();">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'articles',
  computed: {
    articles () {
      return this.$store.state.articlesModule.articles
    }
  },

  methods: {
    deleteArticle (article) {
      console.log('--- Articles.vue: deleteArticle()')

      this.$store.dispatch('deleteArticle', { id: article.id })
        .then(() => console.log('Success: article deleted'))
        .catch(error => {
          console.error(error)
        })
    }
  },

  created () {
    console.log('--- Articles.vue: v-on:click="deleteArticle(article);"')
    this.$store.dispatch('getArticles')
  }
}

</script>

<style scoped>
</style>
