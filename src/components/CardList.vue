<script>
import { state } from '../state.js';
import CardMovie from './CardMovie.vue';
import CardSeries from './CardSeries.vue';

export default {
    name: 'CardList',
    data() {
        return {
            state
        }
    },
    components: {
        CardMovie,
        CardSeries
    }
}
</script>

<template>
    
    <section>

        <div class="container-fluid">
        
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">

                <CardMovie :movie="movie" v-for="movie in state.movies"/>
                <CardSeries :series="series" v-for="series in state.seriesTv"/>

            </div>

        </div>
        
    </section>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;

</style>