<template>
  <div id="app">

    <div class="nav">
      <!-- <div class="ui left aligned container"> -->
          <div>
          <router-link to="/" exact class="item">
            <i class="home icon lnk" /> Home
          </router-link>
          <router-link to="#1" class="item">
            <i class="graduation cap icon lnk" /> Safety
          </router-link>
          <router-link to="#2" class="item">
            <i class="calendar alternate icon lnk" /> Help
          </router-link>
          <router-link to="#4" class="ui item">
            <i class="ui right aligned user icon" />
          </router-link>
      </div>
    </div>
    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
</script>

<style>
#app > div.nav {
  margin-bottom: 1.5em;
}
.nav {
    background-color: #000000;
    display: flex;
    justify-content: space-evenly;
    height: 70px;
    line-height: 70px;
}
.nav i{
  margin-left: 8px;
}

.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50px;
  right: 0;
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

@media (min-width: 540px){
   .nav {
    text-align: center;
    justify-content: space-around;
    height: 100px;
    width: 100%;
    line-height: 100px;
  }
  .nav i{
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
  .nav i{
    margin-left: 60px;
  } 
}
@media (min-width: 1000px) {
  .nav i{
    margin-left: 90px;
  } 
}
</style>

