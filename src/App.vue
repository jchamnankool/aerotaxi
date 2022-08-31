<template>
  <div id="app">

    <div class="nav">
      <!-- <div class="ui left aligned container"> -->
      <div>
        <router-link to="/" exact class="item">
          <i id="navIcon" class="home icon lnk" /> <strong>Home</strong>
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
#app{
  max-width: 100vw;
  margin: 0 auto;
}
#app > div.nav {
  margin-bottom: 1.5em;
  font-size: 120%;
}

.nav {
  background-color: #000000;
  display: flex;
  justify-content: space-evenly;
  height: 70px;
  line-height: 70px;
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

