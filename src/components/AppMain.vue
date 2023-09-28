<script>
import {state} from '../state.js';

export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    methods: {
        flagsCreator(url, foo) {
            return url + foo + '/flat/32.png'
        }
    },
    created() {
        state.fetchMovies(state.base_url);
    }
}
</script>

<template>

    <div class="container text-center">
        <h1>Search your movies</h1>
        <div class="searchbox d-flex justify-content-center m-3">
            <form @submit.prevent="state.fetchMovies">
                <input class="form-control" type="search" v-model="state.searchText" placeholder="Search a movie">
                <button type="submit" class="border-0 bg-primary text-white ms-2 rounded-3">Search</button>
            </form>    
        </div>

        <div class="row row-cols-1 row-cols-md-5 g-3">

            <div class="col" v-for="movie in state.movies">
                <div class="card h-100">
                    <h3>FILM CHE HAI CERCATO</h3>
                    <h2>Titolo: {{movie.title}}</h2>
                    <h3>Titolo Originale: {{movie.original_title}}</h3>
                    <p>
                        Lingua: {{movie.original_language}}
                        <img :src="flagsCreator(state.flags_url, movie.original_language.toUpperCase())" alt="">
                    </p>
                    <span>Voto: {{movie.vote_average}}</span>
                </div>
            </div>

            <div class="col" v-for="series in state.seriesTv">
                <div class="card h-100">
                    <h3>SERIE TV CHE HAI CERCATO</h3>
                    <h2>Nome: {{series.name}}</h2>
                    <h3>Nome Originale: {{series.original_name}}</h3>
                    <p>
                        Lingua: {{series.original_language}}
                        <img :src="flagsCreator(state.flags_url, series.original_language.toUpperCase())" alt="">
                    </p>
                    <span>Voto: {{series.vote_average}}</span>
                </div>
            </div>

        </div>
    </div>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
</style>
