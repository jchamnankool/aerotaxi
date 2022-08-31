<template>
    <div>
        <h1 id="title" class="ui left aligned">AeroTaxi</h1>
        <!-- <img src="https://www.si.edu/sites/default/files/newsdesk/press_releases/picture1_1.jpg" alt="taxi"
            class="image"> -->
            <div id="heroContainer">
                <!-- <img src="https://www.si.edu/sites/default/files/newsdesk/press_releases/picture1_1.jpg" alt="aerotaxi" /> -->
            </div>
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
        'cards': cards
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody:ital@1&display=swap');

.image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    border-radius: 15px;
}

#heroContainer {
    /* width: 100vw; */
}

#title {
    text-align: center;
    font-family: 'Anybody', cursive;
    text-decoration: none;
    font-size: 32px;
}

.btn {
    border-radius: 30px;
    width: 7em;
    height: 3em;
    margin: 1em;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 640px) {
    #title {
        font-size: 64px;
    }
}
</style>