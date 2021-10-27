import store from "./state/index.js";
dispatch(action, payload) {
    store.dispatch(action, payload);
  }
setState(payload) {
    return this.dispatch("setState", payload);
  }
module.exports = {dispatch,  setState}