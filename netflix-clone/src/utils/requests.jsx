const API_KEY = Process.env.REACT-APP-API_KEY;
const requests = {
  fetchTreading: `/treanding/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/discover/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movies?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movies?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movies?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`
};
export default requests;