<script setup>
import { defineProps, ref } from "vue";
import MovieModal from "./movieModal.vue";

const { peliculas } = defineProps(["peliculas"])



const resaltados = ref(Array(peliculas.length).fill(false));

const sobresalir = (index, estado) => {
  resaltados.value[index] = estado;
}
const urlMovie = "https://image.tmdb.org/t/p/original/"
const selectedMovie = ref(null);
const showModal = ref(false);

const openModal = (pelicula) => {
  selectedMovie.value = pelicula;
  showModal.value = true;
}

const closeModal = () => {
  showModal.value = false;
}
</script>
<template>
  <div class="pelicula-list">
    <div v-for="(pelicula, index) in peliculas" :key="index" class="pelicula-card" @mouseenter="sobresalir(index, true)"
      @mouseleave="sobresalir(index, false)" :class="{ 'sobresalir': resaltados[index] }"
      @click="openModal(pelicula)"
      >

      <img :src="urlMovie + pelicula.poster_path" :alt="pelicula.original_title" />
      <div class="info-movie">

        <h3>{{ pelicula.original_title.toUpperCase() }}</h3>
        <div class="like">
          <i class="material-icons" style="color:red">favorite </i>
          <p>{{ pelicula.vote_average }}</p>     
        </div>
      </div>
    </div>
  </div>
  copyrights Diego Hernández -- prueba tecnica-- Double V Partners 2023
  <movie-modal :movie="selectedMovie" v-if="showModal" :closeModal="closeModal" />
</template>







