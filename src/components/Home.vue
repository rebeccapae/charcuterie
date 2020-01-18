<template>
    <section class="hero is-large">
    <!-- Hero content: will be in the middle -->
    <div class="hero-main">
    <!-- Image in hero-main -->
        <div class="hero-text has-text-centered">
            <div class="hero-text__main">
                <p class="title">Charcuterie</p>
                <p class="subtitle">Everything in One Place</p>
            </div>
        </div>
        <div class="hero-square">
            <div class= "hero-square__1"></div>
            <div class= "hero-square__2"></div>
            <div class= "hero-square__3"></div>
            <div class= "hero-square__4"></div>
            <div class= "hero-square__5"></div>
            <div class= "hero-square__6"></div>
            <div class= "hero-square__7"></div>
        </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
            <ul>
            <li class="is-active"><a>Overview</a></li>
            <li><a>To-Dos</a></li>
            <li><a>Notes</a></li>
            <li><a>Links</a></li>
            <li><a>Videos</a></li>
            <li><a>Progress</a></li>
            </ul>
        </div>
        </nav>
    </div>
    </section>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

.hero-main  {
    width: 100%;
    padding-bottom: 40%;
    position: relative;
    margin-bottom: 20%;
}

.hero-text {
    text-align: left;
    border: 2px solid black;
    /* display: inline-block; */
    position: absolute;
    left: 0;
    width: 40%;
    height: 100%;
}

/* .hero-text p {
    margin: 5% auto;
}

.hero-text .title {
    margin-top: 15%;
} */

.hero-text__main {
    margin: auto;
}

.hero-square {
    width: 60%;
    height: 100%;
    background-color: #F2D0F2;
    position: absolute;
    right: 0;
}

.hero-square__1 {
    width: 35%;
    padding-bottom: 35%;
    position: absolute;
    left: 0;
    display: inline-block;
    background-color: #B59CD9;
    margin-right: -4px;
    z-index: 5
}

.hero-square__2 {
    width: 45%;
    padding-bottom: 45%;
    position: absolute;
    left: 35%;
    display: inline-block;
    background-color: #204F8C;
    margin-right: -4px;
    z-index: 1;
}

.hero-square__3 {
    width: 28%;
    position: absolute;
    right: 0;
    padding-bottom: 28%;
    display: inline-block;
    background-color: #0C3559;
    z-index: 4;
}

.hero-square__4 {
    width: 45%;
    padding-bottom: 45%;
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-block;
    background-color: #77BDD9;
    margin-right: -4px;
}

.hero-square__5 {
    width: 29%;
    padding-bottom: 29%;
    position: absolute;
    left: 33%;
    top: 40%;
    display: inline-block;
    background-color: #A64EA0;
    margin-right: -4px;
    z-index: 4;
}

.hero-square__6 {
    width: 35%;
    position: absolute;
    right: 20;
    top: 20%;
    z-index: 3;
    padding-bottom: 35%;
    display: inline-block;
    background-color: #F29BD4;
}

.hero-square__7 {
    width: 40%;
    padding-bottom: 40%;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;

    display: inline-block;
    background-color: rgb(148, 11, 100);
}

.tabs.is-boxed li.is-active a {
    border-color: none;
    background-color: #B59CD9;
}

.tabs li.is-active a {
    color: white;
    font-weight: bold;
}

.tabs.is-boxed a:hover {

}

/* Color Theme Swatches in Hex */
/* .Porsche-988-VISION-1-hex { color: #F2D0F2; }
.Porsche-988-VISION-2-hex { color: #B59CD9; }
.Porsche-988-VISION-3-hex { color: #204F8C; }
.Porsche-988-VISION-4-hex { color: #0C3559; }
.Porsche-988-VISION-5-hex { color: #77BDD9; } */

</style>