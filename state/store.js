import PubSub from './pubsub';

export default class Store {
    constructor(params) {
        let self = this;
        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'default state';
        self.events = new PubSub();
        if (params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }
        if (params.hasOwnProperty('mutations')) {
            self.mutations = params.mutations;
        }
        self.state = new Proxy((params.state || {}), {
            set: function (state, key, value) {
                state[key] = value;
                console.log(`stateChange: ${key}: ${value}`);
                self.events.publish('stateChange', self.state);
                if (self.status !== 'mutation') {
                    console.warn(`You should use a mutation to set ${key}`);
                    self.status = 'resting'; // Only reset to 'resting' if not in a mutation
                }
                return true;
            }
            
        });
    }
    dispatch(actionKey, payload) {
        let self = this;
        if (typeof self.actions[actionKey] !== 'function') {
            console.error(`Action "${actionKey} doesn't exist.`);
            return false;
        }
        console.groupCollapsed(`ACTION: ${actionKey}`);
        self.status = 'action';
        self.actions[actionKey](self, payload);
        console.groupEnd();
        return true;
    }
    commit(mutationKey, payload) {
        let self = this;
        if (typeof self.mutations[mutationKey] !== 'function') {
            console.log(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }
        self.status = 'mutation'; // Set status to mutation
        let newState = self.mutations[mutationKey](self.state, payload);
    
        // Apply all changes within the mutation status
        for (let key in newState) {
            if (newState.hasOwnProperty(key)) {
                self.state[key] = newState[key];
            }
        }
    
        self.status = 'resting'; // Reset to 'resting' after the mutation is complete
        return true;
    }
    
    
     
}
