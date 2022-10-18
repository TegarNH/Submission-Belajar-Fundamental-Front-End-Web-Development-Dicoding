/* eslint-disable linebreak-style */
class SearchResult extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  renderCount(count, keyword) {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Noto Sans Display', sans-serif;
        }
        .placeholder {
          text-align: center;
          margin-top: 20px;
          display: block;
          font-weight: lighter;
          color: white;
        }
      </style>
    
      <h3 class="placeholder">Terdapat ${count} Film yang sesuai dengan kata kunci <i><b>${keyword}</b></i></h3>
    `;
  }
}

customElements.define('search-result', SearchResult);
