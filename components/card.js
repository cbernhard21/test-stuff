

  const cardTemplate = document.createElement('template');

  cardTemplate.innerHTML = `
  <style>
    .card {
      width: 300px;
      border: 1px solid black;
      border-radius: 10px;
      padding: 2rem 4rem;
      margin: 1rem;
    }
  </style>
  
  <div class="card">
    <p>This is a card component</p>
  </div>
  
  `;
  
  class Card extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback(){
      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.appendChild(cardTemplate.content)
    }
  }
  customElements.define('card-component', Card);



