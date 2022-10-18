/* eslint-disable no-underscore-dangle */
import './movie-item';

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = '';

    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Sans Display', sans-serif;
      }
      .placeholder {
        display: block;
        font-weight: lighter;
        text-align: center;
        color: white;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('movie-list', MovieList);
