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
        <div class="searchbox m-3">
            <form class="d-flex justify-content-center align-items-center" @submit.prevent="state.fetchMovies">
                <input class="form-control w-75 me-2 rounded-3" type="search" v-model="state.searchText" placeholder="Search a movie">
                <button type="submit" class="border-0 bg-primary text-white ms-2 rounded-3 fs-3 fw-bold">Search</button>
            </form>    
        </div>

        <div class="row row-cols-1 row-cols-md-5 g-3">

            <div class="col" v-for="movie in state.movies">
                <div class="card h-100">
                    <img :src="'https://image.tmdb.org/t/p/w300/' + movie.poster_path" alt="">
                    <h2>Titolo: {{movie.title}}</h2>
                    <h4>Titolo Originale: {{movie.original_title}}</h4>
                    <p>
                        Lingua: {{movie.original_language}}
                        <img :src="flagsCreator(state.flags_url, movie.original_language.toUpperCase())" alt="">
                    </p>
                    <span>Voto: {{movie.vote_average}}</span>
                </div>
            </div>

            <div class="col" v-for="series in state.seriesTv">
                <div class="card h-100">
                    <img :src="'https://image.tmdb.org/t/p/w300/' + series.poster_path" alt="">
                    <h2>Nome: {{series.name}}</h2>
                    <h4>Nome Originale: {{series.original_name}}</h4>
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
    input{
        height: 50px;
    }
    button{
        height: 50px;
        width: 150px;
    }
</style>
