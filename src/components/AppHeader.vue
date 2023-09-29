<script>
import AppLogo from './AppLogo.vue';
import { state } from '../state.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
    components: {
        AppLogo
    },
    created() {
        state.fetchMovies(state.base_url);
    }   
}
</script>

<template>

    <header id="header_app">

        <div class="d-flex justify-content-between align-items-center">
            
            <AppLogo/>

            <div class="searchbox m-3">
                <form class="d-flex justify-content-between align-items-center" @submit.prevent="state.fetchMovies">
                    <input class="form-control me-2 rounded-3" type="search" v-model="state.searchText" placeholder="Search a movie">
                    <button type="submit" class="border-0 text-white ms-2 rounded-3 fs-3 fw-bold">Search</button>
                </form>    
            </div>
        </div>

    </header>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;

    #header_app{
        background-color: black;
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