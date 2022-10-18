/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-else-return */
// Terlampir API yang saya dapatkan dari web TMDB
// https://drive.google.com/file/d/1YROah4C2WwinNfcEYHgRM1pTnT2a7DU3/view?usp=sharing
const apiKey = '4a6e77af209905c7387a68635d8d725c';

class DataSource {
  static searchMovie(keyword, page) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&page=${page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results.length !== 0) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`Kata kunci "${keyword}" tidak ditemukan dalam database`);
        }
      });
  }

  static loadMovie() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results.length !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject('Gagal memuat Movie. Silahkan coba lagi.');
        }
      });
  }
}

export default DataSource;
