/**
  This is a JavaScript mixin that you can use to connect a Custom Element base
  class to a Redux store. The `stateChanged(state)` method will be called when
  the state is updated.

  Example:

      import { connect } from 'pwa-helpers/connect-mixin.js';

      class MyElement extends connect(store)(HTMLElement) {
        stateChanged(state) {
          this.textContent = state.data.count.toString();
        }
      }
*/

export const connect = (store) => (baseElement) => class extends baseElement {
    connectedCallback() {
        if (super.connectedCallback) {
            super.connectedCallback();
        }
        this._subscription = store.events.subscribe("stateChange", state => this.stateChanged(state));
        this.stateChanged(store.state);
    }
    disconnectedCallback() {
       delete this._subscription;
        if (super.disconnectedCallback) {
            super.disconnectedCallback();
        }
    }
    /**
     * The `stateChanged(state)` method will be called when the state is updated.
     */
    stateChanged(_state) { }
};
//# sourceMappingURL=connect-mixin.js.map