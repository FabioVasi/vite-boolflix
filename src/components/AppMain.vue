<script>
import {state} from '../state.js';
import CardList from './CardList.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    components: {
        CardList
    },  
}
</script>

<template>

    <main id="main_app" class="mt-4">

        <CardList/>

    </main>

</template>

<style lang="scss">
    @use '../assets/scss/partials/variables.scss' as *;
</style>
