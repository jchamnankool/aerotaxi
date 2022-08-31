<template>
    <div id='cat'>
        <h1 class="ui left aligned h1">Flying Taxi</h1>
        <img src="https://www.si.edu/sites/default/files/newsdesk/press_releases/picture1_1.jpg" alt="taxi" class="image">
        <button class="btn">Book a Trip</button>
        <subscribeform />
        <cards />
</div>
</template>

<script>
import SubscribeForm from '../components/SubscribeForm.vue'
import cards from '../components/cards.vue'
export default {
    name: 'home',
    components: {
        'subscribeform': SubscribeForm,
        'cards' : cards
    }
}
</script>


<style scoped>
#cat{
    max-width: 960px;
    margin: 0 auto;
}
.image{
   display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-radius: 15px;
}
.h1{
    text-align: center;
}
.btn{
    font-weight: bold;
    font-size: 120%;
    border-radius: 30px;
    width: 15em;
    height: 3em;
    margin:1em;
    text-align: center;
    display: block;
    margin: 50px auto 50px auto;
}

@media (min-width: 1000px){
    .btn{
    font-size: 200%;
    font-weight: bold;
 
    }
}
</style>