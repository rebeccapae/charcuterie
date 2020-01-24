<template>
<div class="container-box">
    <div class="background"></div>
    <div class="card-collection">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="../assets/time.jpg">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Macarons</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a class="card-footer-item">Open</a>
                        <a href="#" class="card-footer-item">Edit Tile</a>
                        <a href="#" class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="../assets/scrapbook.jpg">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Cakes</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Open</a>
                        <a href="#" class="card-footer-item">Edit Tile</a>
                        <a href="#" class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="../assets/flowers.jpg">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">Tarts</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <a href="#">#css</a> <a href="#">#responsive</a>
                            <br>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Open</a>
                        <a href="#" class="card-footer-item">Edit Tile</a>
                        <a href="#" class="card-footer-item">Delete</a>
                    </footer>
                </div>
            </div>
        </div>
    </div> 
</div>    
</template>

<script>
export default {
    name: "Boards"
}
</script>

<style scoped>

.container-box {
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    height: 100%;

}
.background {
    background: url("../assets/desk.jpg") center/cover border-box;
    width: 100%;
    height: 100%;
    position: absolute;
} 

.card-collection {
    display: inline-block;
    text-align: left;
    margin: 3%;
    margin-top: 10%;

}

.card {
    display: inline-block;
    width: 100%;
}

.image {
    text-align: center;
    vertical-align: middle;
}

img {
    display: inline;
}

</style>