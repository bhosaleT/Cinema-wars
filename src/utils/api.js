import axios from "axios";

export default {
  discoverMovies(genre) {
    var Url = `https://api.themoviedb.org/3/discover/movie?api_key=e011c26b2539dbf71409396edede6631&with_genres=${genre}&vote_average.gte=7`;

    return axios.get(Url).then(response => {
      return response.data.results;
    });
  }
};
