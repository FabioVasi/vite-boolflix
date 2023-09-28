import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=daba673b73b762af2494496b68204faf',
    movies: null,
    searchText: '',

    fetchMovies(url) {
        console.log(this, this.base_url);
        axios
        .get(url)
        .then(response => {
            console.log(response.data.results);
            this.movies = response.data.results;
        })
        .catch(error => {
            console.error(error);
        })
    }
})