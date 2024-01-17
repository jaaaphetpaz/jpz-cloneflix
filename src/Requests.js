const key = "3145803c95c9b9c622127a137c125253";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestTry: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
};

export default requests;
