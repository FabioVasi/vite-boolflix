<script>
import {state} from '../state.js';

export default {
    name: 'AppMain',
    emits: ['performSearch'],
    data() {
        return {
            state
        }
    },
    methods: {
        searchMovie() {
            console.log(this.state.searchText);
            const url = this.state.base_url + `&query=${this.state.searchText}`;
            console.log(url);
            this.state.fetchMovies(url)
        }
    },
    created() {
        state.fetchMovies(state.base_url);
    }
}
</script>

<template>

    <div class="container">
        <div class="searchbox d-flex">
            <input class="form-control" type="search" v-model="state.searchText" placeholder="Search a movie">
            <button class="border-0 bg-primary text-white" @click="$emit('performSearch')">Search</button>
        </div>
    </div>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
</style>
