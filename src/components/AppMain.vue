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

    },
    created() {
        state.fetchMovies(state.base_url);
    }
}
</script>

<template>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
</style>
