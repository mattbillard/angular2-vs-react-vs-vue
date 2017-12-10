<template>
  <div v-if="article" v-on:submit="saveArticle($event)">
    <h1>{{ (article.id) ? 'Update' : 'Create'}}</h1>
    <form>
      <div class="form-group" v-if="article.id">
        <label>id</label>
        {{article.id}}
      </div>
      
      <div class="form-group">
        <label for="title">title</label>
        <input v-model="article.title" type="input" class="form-control" id="title" name="title" placeholder="title" autocomplete="off" autofocus>
      </div>

      <div class="form-group">
        <label for="text">text</label>
        <textarea v-model="article.text" class="form-control" id="text" name="text" placeholder="text" autocomplete="off"></textarea>
      </div>

      <button class="btn btn-default" type="button" v-on:click="goToArticles()">Cancel</button>
      <button class="btn btn-primary" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'article',
  computed: {
    article () {
      return this.$store.state.articlesModule.article
    }
  },

  methods: {
    goToArticles () {
      this.$router.push('/articles/')
    },

    saveArticle (event) {
      event.preventDefault()
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
