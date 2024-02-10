const template = document.createElement('template');
template.innerHTML = `
<style>
h3 {
  color:blue;
}
</style>`;
<div> class= "user-card"</div>;
class UserCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.innerHTML = `<style>h3{color: green}</style><h3></h3>${this.getAttribute(
      'name'
    )} </h3>`;
  }
}
window.customElements.define('user-card', UserCard);
