<script>
import {state} from '../state.js';

export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    /*methods: {
        
    },*/
    created() {
        state.fetchMovies(state.base_url);
    }
}
</script>

<template>

    <div class="container">
        <div>
            <form action="" class="searchbox d-flex mb-5" @submit.prevent="state.fetchMovies">
                <input class="" type="search" v-model="state.searchText" placeholder="Search a movie">
                <button type="submit" class="border-0 bg-primary text-white">Search</button>
            </form>    
        </div>

        <div class="row row-cols-1 row-cols-md-5 g-3">
            <div class="col" v-for="movie in state.movies">
                <div class="card h-100">
                    <h2>Titolo: {{movie.title}}</h2>
                    <h3>Titolo Originale: {{movie.original_title}}</h3>
                    <p>Lingua: {{movie.original_language}}</p>
                    <span>Voto: {{movie.vote_average}}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
</style>
