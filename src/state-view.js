import { LitElement } from "lit";
import { connect } from "../state/connect-mixin.js";

import store from "../state/index.js";

/**
 * A view that wraps the connect mixin to access the store
 * in the global state manager.
 *
 * @since      1.0.0
 * @access     public
 *
 * @class
 * @augments LitElement
 * @mixes    connect
 *
 * @alias   state-view
 * @memberof StateView
 * @property {Object}   user            Global App User Object.
 * @property {Object}   forms           Forms for the application.
 * @property {Boolean}  drawerOpen      Whether the sidebar is open or closed.
 * @property {Boolean}  offline         Whether the network is connected.
 * @property {Object}   error           Error message object.
 * @property {Object}   loading         Global App User Object.
 * @property {Object}   forms           Forms for the application.
 * @property {Boolean}  authenticated   Whether the user is authenticated.
 * @property {Boolean}  offline         Whether the network is connected.
 * @property {String}   refreshToken    Refresh token for authenticated user.
 * @property {String}   accessToken     JWT token for authenticated user.
 *
 */
export class StateView extends connect(store)(LitElement) {
  static get properties() {
    return {
    user: { type: Object },
    forms:{type:Object},
    drawerOpen: { type: Boolean },
    offline: { type: Boolean },
    error: { type: Object },
    loading: { type: Boolean },
    authenticated: { type: Boolean },
    refreshToken:{type:String},
    accessToken:{type:String},
    logo:{type:String}
    };
  }

  createRenderRoot() {
    return this;
  }
  dispatch(action, payload) {
    store.dispatch(action, payload);
  }
  setState(payload) {
    return this.dispatch("setState", payload);
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
  stateChanged(state) {
    //console.log("state changed in state-view", state);
    this.error = state.error;
    this.query = state.query;
    this.offline = state.offline;
    this.drawerOpen = state.drawerOpen;
    this.loading = state.loading;
    this.authenticated = state.authenticated;
    this.user = state.user;
    this.refreshToken = state.refreshToken;
    this.accessToken = state.accessToken;
    this.logo = state.logo;

  }
}
