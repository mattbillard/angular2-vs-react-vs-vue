<template>
  <div v-if="article">
    <h1>{{ (article.id) ? 'Update' : 'Create'}}</h1>
    <form>
      <div class="form-group" v-if="article.id">
        <label>id</label>
        {{article.id}}
      </div>
      
      <div class="form-group">
        <label for="title">title</label>
        <input v-model="article.title" type="input" class="form-control" id="title" name="title" placeholder="title">
      </div>

      <div class="form-group">
        <label for="text">text</label>
        <textarea v-model="article.text" class="form-control" id="text" name="text" placeholder="text"></textarea>
      </div>

      <button v-on:click="goToArticles()" class="btn btn-default" type="button">Cancel</button>
      <button v-on:click="saveArticle()" class="btn btn-primary" type="button">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'article',
  computed: {
    article () {
      return this.$store.state.articles.article
    }
  },

  methods: {
    goToArticles () {
      this.$router.push('/articles/')
    },

    saveArticle () {
      this.$store.dispatch('saveArticle', { article: this.article })
        .then(() => {
          console.log('Success: article saved')
          this.goToArticles()
        })
        .catch(error => {
          console.error(error)
        })
    }
  },

  created () {
    let id = this.$route.params.id
    if (id) {
      this.$store.dispatch('getArticleById', { id: id })
    } else {
      this.$store.dispatch('getNewArticle')
    }
  }
}
</script>

<style scoped>
</style>
