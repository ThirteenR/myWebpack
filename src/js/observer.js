class Observer{
    constructor(){
        this.subscribers = {};
    }
    registered(subscriber){
        this.subscribers[subscriber.name] = subscriber;
    }
    release(message){
        for (let key in this.subscribers) {
            this.subscribers[key].update(message);
        }
    }
}
class Subscriber {
    constructor(name){
        this.name = name;
    }
    update(message){
     console.log(this.name + " 接收到通知 ---" + " " + message);
    }
}

export default {
    Subscriber : Subscriber,
    Observer : Observer
}