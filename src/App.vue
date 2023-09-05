<script setup>
import HomeView from './views/HomeView.vue'
import PeliculaNavbar from './components/peliculaNavbar.vue';
import appNavbar from './components/appNavbar.vue';

</script>

<template>
  <app-navbar />
 
  <div class="content">
    <pelicula-navbar />
    <home-view />

  </div>
</template>


