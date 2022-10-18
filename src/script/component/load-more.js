/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
class LoadMore extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set clickEvent(event) {
    this._clickEvent = event;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Noto Sans Display', sans-serif;
        }
        a {
          text-align: right;
          display: block;
          color: white;
          margin: 0 50px 30px 0;
          cursor: pointer;
        }
      </style>
    
      <a><u>Lihat halaman berikutnya >></u></a>
    `;

    this.shadowDOM.querySelector('a')
      .addEventListener('click', this._clickEvent);
  }
}

customElements.define('load-more', LoadMore);
