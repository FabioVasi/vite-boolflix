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
                        <p>
                            Voto: {{movie.vote_average}}
                            <span v-for="movie  in  Math.round(movie.vote_average / 2)">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            </span>
                        </p>
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
                        <p>
                            Voto: {{series.vote_average}}
                            <span v-for="series  in  Math.round(series.vote_average / 2)">
                                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                            </span>
                        </p>
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
    .icon{
        fill: gold;
    }
</style>
