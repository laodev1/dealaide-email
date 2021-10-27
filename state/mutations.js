export default {
    setState(state, payload) {
        state = { ...state, ...payload };
        console.log(state);
        return state;
      },
};