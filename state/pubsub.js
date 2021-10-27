export default class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        let index;
        if (!this.events[event]) {
            this.events[event] = [];
        }
        index = this.events[event].push(callback);

        return {
            unsubscribe() {
                this.events[event].splice(index, 1);
            }
        };
    }

    publish(event, data = {}) {
        // console.log("publish",event, data)
        if (!this.events.hasOwnProperty(event)) {
            return [];
        }
        return this.events[event].map(callback => callback(data));
    }
}
