import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=daba673b73b762af2494496b68204faf&query=Star',

})