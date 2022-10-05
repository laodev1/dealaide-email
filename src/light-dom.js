import {LitElement } from 'lit';

export class LightDom extends LitElement {
  
  createRenderRoot() {
    return this;
  }
  fire(type, detail) {
    this.dispatchEvent(
      new CustomEvent(type, {
        bubbles: true,
        composed: true,
        detail
      })
    );
  }
}