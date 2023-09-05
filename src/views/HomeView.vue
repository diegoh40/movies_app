<script setup>
import {ref} from 'vue';
import PeliculaList from "../components/PeliculaList.vue";
import axios from 'axios';


// API
const apiKey = '54f0f97aa99d44374eac43cbcc57a53f';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
const movies = ref([]);
axios
  .get(apiUrl)
  .then((response) => {
   movies.value = response.data.results;
  })
  .catch((error) => {
    console.error('Error al obtener las películas:', error);
  });

</script>


<template>
 
  <div class="home">
    <pelicula-list :peliculas="movies" />
  </div>
</template>


```

