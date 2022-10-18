import img from '../../img/brand-logo.png';

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          width: 100%;
          align-items: center;
          background-color: #1D2243;
        }
        .navbar-logo {
          flex-grow: 1;
          text-align: center;
          padding: 10px 50px;
        }
        #logo {
          height: 55px;
        }
      </style>
      
      <a class="navbar-logo" href="index.html">
        <img src="${img}" id="logo" alt="Logo Gartech Movie">
      </a>
    `;
  }
}

customElements.define('app-bar', AppBar);
