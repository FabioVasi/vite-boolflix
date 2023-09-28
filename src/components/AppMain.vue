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

    <header id="header_app">

        <div class="d-flex justify-content-between align-items-center">
            <h1 class="mb-0 ms-3">Boolflix</h1>

            <div class="searchbox m-3">
                <form class="d-flex justify-content-between align-items-center" @submit.prevent="state.fetchMovies">
                    <input class="form-control me-2 rounded-3" type="search" v-model="state.searchText" placeholder="Search a movie">
                    <button type="submit" class="border-0 text-white ms-2 rounded-3 fs-3 fw-bold">Search</button>
                </form>    
            </div>
        </div>

    </header>

    <main id="main_app" class="mt-4">

        <div class="container">
        
            

            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">

                <div class="col" v-for="movie in state.movies">
                    <div class="card pb-3 h-100 border-0 text-white bg-dark rounded-4 text-center">
                        <img class="rounded-top-4 mb-3" style="aspect-ratio: 1 / 1.5; object-fit: cover;" :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path" alt="">
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
                    <div class="card pb-3 h-100 border-0 text-white bg-dark rounded-4 text-center">
                        <img class="rounded-top-4 mb-3" style="aspect-ratio: 1 / 1.5; object-fit: cover;" :src="'https://image.tmdb.org/t/p/w342/' + series.poster_path" alt="">
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

    </main>

    

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;

    #header_app{
        background-color: black;
    }
    h1{
        color: red;
        font-style: normal;
        font-size: 4rem;
    }
    input{
        height: 50px;
    }
    button{
        height: 50px;
        width: 150px;
        background-color: red;
    }
</style>
