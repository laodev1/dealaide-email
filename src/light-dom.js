// Importing the LitElement base class from the 'lit' package
import {LitElement } from 'lit';

// Defining a new class 'LightDom' that extends from 'LitElement'
export class LightDom extends LitElement {
  
  // Overriding the 'createRenderRoot' method from 'LitElement'
  // This method is used to return the node into which the element should render.
  // By returning 'this', it means the component will not create a shadow root,
  // and the render will happen in the light DOM.
  createRenderRoot() {
    return this;
  }

  // Defining a 'fire' method that dispatches custom events
  // 'type' is the name of the event, and 'detail' is any data you want to pass with the event.
  // The event is configured to bubble up the DOM and to be composed,
  // which means it will cross shadow DOM boundaries.
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
