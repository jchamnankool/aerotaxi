<template>
    <div class="cards">
        <div class="ui three column">
            `<div class="column box1">
                <div class="ui fluid card">
                <div class="image">
                    <img src="https://i.guim.co.uk/img/media/1fdbe82df9f6507edefe770c2afa154d061df5fe/0_533_7952_4771/master/7952.jpg?width=620&quality=45&fit=max&dpr=2&s=1afd00d7a457fcd6c9795869049c7e62">
                </div>
                <div class="content">
                    <a class="header">About</a>
                </div>
                </div>
            </div>
            <div class="column box2">
                <div class="ui fluid card">
                <div class="image">
                    <img src="https://www.cnet.com/a/img/resize/c2c6a4494251d3a5d45d41629e677e16f25d4ea9/2019/01/08/b80d7ffe-de66-43ce-a0ce-7f63d536554b/bellthing123.jpg?auto=webp&fit=crop&height=675&width=1200">
                </div>
                <div class="content">
                    <a class="header">Events</a>
                </div>
                </div>
            </div>
            <div class="column">
                <div class="ui fluid card">
                <div class="image">
                    <img src="https://www.hornsby.nsw.gov.au/__data/assets/image/0015/121704/community-directory.jpg">
                </div>
                <router-link to="/Newsletter" class="content">
                    <a class="header">Community</a>
                </router-link>
                </div>
            </div>
        </div>`
    </div>
</template>

<script>

</script>

<style scoped>
.cards{
    display: inline-block;
    text-align: center;
    width: 20em;
    margin: 1em;
}
.box1, .box2{
    margin-bottom: 2em;
}
@media (min-width: 1000px){
    .cards{
        display: block;
    }
    .column{
        float: right;
    }
}

</style>
