<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/" exact class="item">
            Home
          </router-link>
          <router-link to="/" class="item">
            About
          </router-link>
          <router-link to="/" class="item">
            Events
          </router-link>
          <router-link to="/" class="item">
            Newsletter
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <SubscribeForm />
        </div>
      </div>
    </div>
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
  color: #2c3e50;
}
</style>
