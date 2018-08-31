import axios from "axios";

const apiKey = 'e011c26b2539dbf71409396edede6631';

export default {
  discoverMovies(genre) {
    var discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&vote_average.gte=7`;

    return axios.get(discoverUrl).then(response => {
      return response.data.results;
    });
  },

  searchMovies(moviename) {
    // console.log(moviename);
    var searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${moviename}&page=1`;

    return axios.get(searchUrl).then(response => {
      // console.log(response.data.results)
      return response.data.results[0];
    });
  },

  battle(movies) {

  }
};
