
const redux = require("redux")


const createStore = redux.createStore;
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const incrementCounter = () => {
    return {
        type : INCREMENT,
      
    }
}
const decrementCounter = () => {
    return {
        type : DECREMENT,
        
    }
}


const initialState = {
    count : 0,
}
const counterReducer = (state = initialState , action) => {
switch (action.type){
    case INCREMENT : 
    return { count : state.count + 1}
    case DECREMENT : 
    return { count : state.count - 1}
    default :
    return state;
}
}



const store = createStore(counterReducer);

const unsubscribeFn = store.subscribe(() => console.log(store.getState()));

store.dispatch (incrementCounter());
store.dispatch (incrementCounter());
store.dispatch (incrementCounter());
store.dispatch (decrementCounter());
store.dispatch (decrementCounter());

unsubscribeFn();