<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SubscribeForm />
  </div>
</template>

<script>
import SubscribeForm from './components/SubscribeForm.vue'

export default {
  name: 'App',
  components: {
    SubscribeForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
