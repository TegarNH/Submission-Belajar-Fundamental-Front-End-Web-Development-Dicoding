import '../component/movie-list';
import '../component/search-bar';
import '../component/search-result';
import '../component/load-more';
import $ from 'jquery';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const searchResultElement = document.querySelector('search-result');
  const movieListElement = document.querySelector('movie-list');
  const loadMoreElement = document.querySelector('load-more');
  let page = 1;

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const renderCount = (count, keyword) => {
    searchResultElement.renderCount(count, keyword);
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);

    $('search-result').hide();
    $('load-more').hide();
  };

  const loadMovie = async () => {
    try {
      const result = await DataSource.loadMovie();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonSearchClicked = async () => {
    try {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      if (searchElement.value === '') {
        loadMovie();

        $('search-result').hide();
        $('load-more').hide();
      } else {
        page = 1;
        const result = await DataSource.searchMovie(searchElement.value, 1);

        $('search-result').show();
        $('load-more').show();

        renderCount(result.total_results, searchElement.value);
        renderResult(result.results);

        if (result.total_results > 20) {
          loadMoreElement.render();
        }
      }
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonLoadMoreClicked = async () => {
    try {
      page += 1;
      const result = await DataSource.searchMovie(searchElement.value, page);

      $('search-result').hide();
      $('load-more').hide();

      renderCount(result.total_results, searchElement.value);
      renderResult(result.results);
      loadMoreElement.render();

      $('html, body').animate({ scrollTop: 0 }, 'medium');

      if (result.results.length < 20) {
        $('load-more').hide();
      }
    } catch (message) {
      fallbackResult(message);
    }
  };

  loadMovie();
  loadMoreElement.clickEvent = onButtonLoadMoreClicked;
  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
