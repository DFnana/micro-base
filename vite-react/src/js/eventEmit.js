// class EventEmitter{
//     constructor(){
//         this.events = {}
//     }

//     // 监听
//     subscribe(event, callback){
//         if(!this.events[event]){
//             this.events[event] = [];
//             this.events[event]?.push(callback)
//         }
//     }

//     // 取消某个订阅
//     unsubscribe(event, callback){
//         const subscribedEvents = this.events[event];
//         if(subscribedEvents){
//             if(callback){
//                 this.events[event] = subscribedEvents.filter(cb => cb!== callback);
//             }else{
//                 delete this.events[event];
//             }
//         }
//     }

//     // 取消全部订阅
//     unallsubscribe(){
//         this.events = {};
//     }

//     // 发布
//     publish(event, ...args){
//         const subscribedEvents = this.events[event];
//         if(subscribedEvents && subscribedEvents.length) {
//           subscribedEvents.forEach(callback => {
//             callback.apply(null, args);
//           });
//         }
//     }

// }

// const eventEmitter = new EventEmitter();

// export default eventEmitter;



class EventEmitter {
    constructor(){
        this.events={};
    }

    // 监听
    on(type, callback){
        if(!this.events[type]){
            this.events[type] = [];
        }
        this.events[type].push(callback)
    }

    // 触发
    emit(type){
        let list = this.events[type];
        list.forEach(item => {
            // item([].slice.call(arguments, 1));
            item.apply(null, [].slice.call(arguments, 1));
        })
    }


    // 取消某一个监听
    UnOn(type, callback){
        let list = this.events[type];
        if(list){
            if(callback){
                this.events[type] = list.filter(item => item !== callback);
            }else{
                delete this.events[type]
            }
        }
    }

}

const eventEmitter = new EventEmitter();

export default eventEmitter;