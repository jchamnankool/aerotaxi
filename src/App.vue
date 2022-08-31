<template>
  <div id="app">
    <div class="nav">
      <!-- <div class="ui left aligned container"> -->
      <div>
        <router-link to="/" exact class="item">
          <i id="navIcon" class="home icon lnk" /> <span class="current">Home</span>
        </router-link>
        <router-link to="#1" class="item">
          <i id="navIcon" class="graduation cap icon lnk" /> Safety
        </router-link>
        <router-link to="#2" class="item">
          <i id="navIcon" class="calendar alternate icon lnk" /> Help
        </router-link>
        <router-link to="#4" class="ui item">
          <i id="userIcon" class="ui right aligned user icon" />
        </router-link>
      </div>


    </div>
    <div class="ui text container">
      <div class="ui one column grid">
        <div class="cat">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
body {
  background-image: linear-gradient(to right, #2C4B4B, #252224, #252224, #252224, #2C4B4B);
  color: #fff;
}

#app>div.nav {
  max-width: 100vw;
  margin: 0 auto;
}

.nav {
  background-color: #2B2668;
  display: flex;
  justify-content: space-evenly;
  height: 70px;
  line-height: 70px;
}

.nav a {
  color: #fff;
}

.current {
  color: #24BFBB;
  font-weight: bold;
  text-decoration: underline;
}

.home {
  color: #24BFBB;
}

.nav i {
  margin-left: 8px;
}

input {
  width: 300px;
}

div.label {
  width: 120px;
}

div.input {
  margin-bottom: 10px;
}

button.ui.button {
  margin-top: 15px;
  display: block;
}

#navIcon {
  visibility: hidden;
}

#userIcon {
  text-align: right;
}

@media (min-width: 540px) {
  .nav {
    text-align: center;
    justify-content: space-around;
    height: 100px;
    width: 100%;
    line-height: 100px;
  }

  .nav i {
    margin-left: 40px;
  }
}

@media (min-width: 640px) {
  .nav {
    text-align: center;
    justify-content: space-around;
    height: 100px;
    width: 100%;
    line-height: 100px;
  }

  .nav i {
    margin-left: 60px;
  }

  #navIcon {
    visibility: visible;
  }
}

@media (min-width: 1000px) {
  .nav i {
    margin-left: 90px;
  }
}
</style>

