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
            <button class="button is-medium is-rounded" id="create-board">Create Board
                <i class="fas fa-plus"></i>
            </button>
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
    <div class="to-do-container">
        <div class="card to-do">
            <div class="card-content">
                <p class="title">
                To-Do
                </p>
                <p class="subtitle">
                Create a to-do list to stay on top of things
                </p>
                <div class="content to-do__list">
                    <li class="to-do__list-item">
                        <input type="checkbox" class="to-do__list-check" id="checkbox1">
                        <label for="checkbox1">one</label>  
                    </li>
                        <li class="to-do__list-item">
                        <input type="checkbox" class="to-do__list-check" id="checkbox2">
                        <label for="checkbox2">two</label>  
                    </li>
                        <li class="to-do__list-item">
                        <input type="checkbox" class="to-do__list-check" id="checkbox3">
                        <label for="checkbox3">three</label>  
                    </li>
                        <li class="to-do__list-item">
                        <input type="checkbox" class="to-do__list-check" id="checkbox4">
                        <label for="checkbox4">four</label>  
                    </li>
                </div>
            </div>
        </div>
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
    padding-bottom: 50vh;
    position: relative;
    margin-bottom: 10%;
    margin-top: 3%;
}

.hero-text {
    text-align: left;
    /* border: 2px solid black; */
    /* display: inline-block; */
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
}

/* .hero-text p {
    margin: 5% auto;
}

.hero-text .title {
    margin-top: 15%;
} */

.hero-text__main {
    width: 100%;
    margin-top: 25%;
}

.hero-text__main p{
    font-size: 3vw;
}

#create-board {
    margin-top: 8%;
}

.button {
    border-color: #B59CD9;
}

.fas {
    margin-left: 5%;
    content: #0C3559;
}

.hero-square {
    width: 50%;
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

.to-do {
    width: 60%;
    margin: auto;
}

.to-do__list {
    list-style: none;
    text-align: left;
    margin: 1rem;
}

.to-do__list-item {
    margin: 1rem;
    position: relative;
}

label::before {
    width: 20px;
    height: 20px;
    border: 1px solid #A64EA0;
    content: ' ';
    border-radius: 10px;
    float: left;
    margin:0 10px;
    cursor: pointer;
}

label::after {
    display: none;
    top: 5px;
    left: 15px;
    content: '';
    color: #B59CD9;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #B59CD9;
    border-radius: 5px;
    cursor: pointer;
}

input[type=checkbox]:checked ~ label::after{
    display: block;
}

input[type=checkbox]{
    display:none;
}


.to-do__list-check {
    border-radius: 10px;
}

/* Color Theme Swatches in Hex */
/* .Porsche-988-VISION-1-hex { color: #F2D0F2; }
.Porsche-988-VISION-2-hex { color: #B59CD9; }
.Porsche-988-VISION-3-hex { color: #204F8C; }
.Porsche-988-VISION-4-hex { color: #0C3559; }
.Porsche-988-VISION-5-hex { color: #77BDD9; } */

</style>