<script>
import { state } from '../state.js';
import AppLogo from './AppLogo.vue';
import AppSearch from './AppSearch.vue';

export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
    components: {
        AppLogo,
        AppSearch
    }   
}
</script>

<template>

    <header id="header_app">

        <div class="d-flex justify-content-between align-items-center">
            
            <AppLogo/>
            <AppSearch/>
            
        </div>

    </header>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;

    #header_app{
        background-color: black;
    }
</style>