<template>
    <div class="container">
        <h1 id="title" class="ui left aligned">AeroTaxi</h1>
        <!-- <img src="https://www.si.edu/sites/default/files/newsdesk/press_releases/picture1_1.jpg" alt="taxi"
            class="image"> -->
            <div id="heroContainer">
                <!-- <img src="https://www.si.edu/sites/default/files/newsdesk/press_releases/picture1_1.jpg" alt="aerotaxi" /> -->
            </div>
        <button class="btn">Book a Ride</button>
        <subscribeform />
        <div class="help">
            <cards />
        </div>
    </div>
</template>

<script>
import SubscribeForm from '../components/SubscribeForm.vue'
import cards from '../components/cards.vue'
export default {
    name: 'home',
    components: {
        'subscribeform': SubscribeForm,
        'cards': cards
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody:ital@1&display=swap');

.help{
    padding: 0;
    margin: 0 auto;
}
.container{
    max-width: 960px;
    margin: 0 auto;
}

.image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    border-radius: 15px;
}

#title {
    text-align: center;
    font-family: 'Anybody', cursive;
    text-decoration: none;
    font-size: 32px;
    text-shadow: 2px 2px 5px #1B9B9B;
}

.btn{
    font-weight: bold;
    font-size: 120%;
    border-radius: 30px;
    border: none;
    width: 15em;
    height: 3em;
    margin: 1em;
    text-align: center;
    display: block;
    margin: 50px auto 50px auto;
    background-color: #7A4EF4;
    color: #fff;
}

@media (min-width: 1000px){
    .btn{
    font-size: 200%;
    font-weight: bold;
    }
@media (min-width: 640px) {
    #title {
        font-size: 64px;
    }
}
}
</style>