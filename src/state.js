import axios from "axios";
import { reactive } from "vue";

export const state = reactive({
    base_url: 'https://api.themoviedb.org/3/search/movie?api_key=daba673b73b762af2494496b68204faf',
    tvSeries_url: 'https://api.themoviedb.org/3/search/tv?api_key=daba673b73b762af2494496b68204faf',
    movies: null,
    seriesTv: null,
    searchText: '',
    flags_url: 'https://flagsapi.com/',

    fetchMovies() {
        console.log(this, this.base_url, this.tvSeries_url);
        axios
        .get(this.base_url + `&query=${this.searchText}`)
        .then(response => {
            this.movies = response.data.results;
            console.log(this.movies);
        })
        .catch(error => {
            console.error(error);
        })

        axios
        .get(this.tvSeries_url + `&query=${this.searchText}`)
        .then(response => {
            this.seriesTv = response.data.results;
            console.log(this.seriesTv);
        })
        .catch(error => {
            console.error(error);
        })
    }
})