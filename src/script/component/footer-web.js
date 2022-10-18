/* eslint-disable linebreak-style */
class FooterWeb extends HTMLElement {
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
          font-family: 'Noto Sans Display', sans-serif;
        }
        :host {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: block;
          background-color: #1D2243;
          text-align: center;
        }
        p {
          padding: 20px;
          color: white;
        }
      </style>
        
      <p>&copy; 2022 Tegar Naufal Hanip. All rights reserved</p>
    `;
  }
}

customElements.define('footer-web', FooterWeb);
