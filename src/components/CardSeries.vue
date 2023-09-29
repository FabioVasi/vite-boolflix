<script>
import { state } from '../state.js';

export default {
    name: 'CardSeries',
    props: {
        series: Object
    },
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

    <div class="col">
        <div class="overlay card h-100 border-0 text-white bg-dark rounded-4 text-center">
            <img class="rounded-2" style="aspect-ratio: 1 / 1.5; object-fit: cover;" :src="'https://image.tmdb.org/t/p/w342/' + series.poster_path" alt="">

            <div class="shadow rounded-2">
                <h3>Nome: {{series.name}}</h3>
                <h5>Nome Originale: {{series.original_name}}</h5>
                <p>
                    Lingua: {{series.original_language}}
                    <img :src="flagsCreator(state.flags_url, series.original_language.toUpperCase())" alt="">
                </p>
                <p>
                    Voto: {{series.vote_average}}
                    <span v-for="series in Math.round(series.vote_average / 2)">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    </span>
                </p>
                <p>
                    Overview: {{ series.overview }}
                </p>
            </div>
            
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @use '../assets/scss/partials/variables.scss' as *;

    img:hover .overlay{
        display: block;
    }
    .overlay{
        position: relative;
    }
    .overlay:hover .shadow{
        display: block;
    }
    .shadow{
        padding: 1rem;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000000e0;
        width: 100%;
        height: 100%;
    }
    .icon{
        fill: gold;
    }
</style>