<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppHeader from '@/modules/articles/components/AppHeader'

  export default {
    name: 'app',
    components: {
      AppHeader
    }
  }
</script>

<style>
  body {
    padding-top: 50px;
  }

  textarea {
      min-height: 150px;
  }
</style>
