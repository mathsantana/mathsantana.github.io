class NavBar extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    this.$shadow = this.attachShadow({ mode: "open" });
  }
}

window.customElements.define("nav-bar", NavBar);
