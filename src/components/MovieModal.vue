<script setup>
import { defineProps } from "vue";
defineProps({
    movie: {
        type: Object,
        required: true,
    },
    closeModal: {
        type: Function,
        required: true,
    }
})

const urlMovie = "https://image.tmdb.org/t/p/original/"

</script>
  
<template>
    <div class="movie-modal-overlay">
        <div class="movie-modal">
            <div class="btn-close-mobil">
                <img class="img-modal-mobil" :src="urlMovie + movie.poster_path" :alt="movie.original_title"
                    style=" padding-left: 80px;" />
                <i class="material-icons" @click="closeModal" style="color: rgb(163, 163, 163); padding-left: 55px;">close
                </i>
            </div>



            <img class="img-modal" :src="urlMovie + movie.poster_path" :alt="movie.original_title" />

            <div class="btn-close">
                <i class="material-icons" @click="closeModal" style="color: rgb(116, 116, 116)">close </i>
            </div>
            <div class="descripcion">
                <div class="rotulo">


                    <h3> {{ movie.original_title.toUpperCase() }}</h3>
                    <p style="color:rgb(81, 159, 248)">Adventure Sci-fi Thriller </p>
                    <div class=" estadisticas">


                        <div class="like">
                            <i class="material-icons" style="color:red">favorite </i>
                            <p>{{ movie.vote_average }}</p>
                        </div>
                        <div class="like">
                            <i class="material-icons" style="color:rgb(78, 124, 252)">thumb_up </i>
                            <p>{{ movie.vote_count }}</p>
                        </div>
                        <div class="like">
                            <i class="material-icons" style="color:rgb(255, 196, 0)">emoji_events </i>
                            <p>12</p>
                        </div>

                    </div>
                </div>

                <p class="p-class">{{ movie.overview }}</p>
                <div class="modal-content">

                    <button class="btn-modal1">Watch Trailer<i class="material-icons"
                            style="color:white">play_arrow</i></button>
                    <button class="btn-modal2">toWishlist <i class="material-icons" style="color:white">star</i></button>

                </div>
            </div>

        </div>

    </div>
</template>



  