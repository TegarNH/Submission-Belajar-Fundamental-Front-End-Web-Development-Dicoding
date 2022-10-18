/* eslint-disable no-underscore-dangle */
class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        *{
          font-family: 'Noto Sans Display', sans-serif;
        }
        .search-container {
          max-width: 800px;
          margin: 0px auto;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 8px;
          display: flex;
          position: sticky;
          top: 30px;
          background-color: white;
        }
        .search-container > input {
          width: 75%;
          padding: 16px;
          border-radius: 8px;
          border: 2px solid #1e297c;
          font-weight: bold;
          font-size: 16px;
        }
        .search-container > input:focus::placeholder {
          font-weight: bold;
        }
        .search-container >  input::placeholder {
          color: #1e297c;
          font-weight: normal;
          font-size: 16px;
        }
        .search-container > button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          border-radius: 16px;
          padding: 16px;
          background-color: #1e297c;
          color: white;
          border: 0;
          text-transform: uppercase;
        }
        .search-container > button:hover {
            box-shadow: 0px 0px 8px 0 #1e297c;
        }
        @media screen and (max-width: 930px) {
          .search-container {
            flex-direction: column;
            margin: 0px 50px;
          }
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
          .search-container > button {
            width: 100%;
          }
        }
      </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Cari Film Kesukaanmu" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement')
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
