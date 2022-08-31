const { createStore } = require("redux");

const reducer = (state, action) => {
  switch (action.type) {
    case "int_incre": {
      return { ...state, count: 3, todo: [...state.todo, ...action.payload] };
    }
    case "int_decre": {
      return { ...state, count: state.count - action.payload };
    }
    default: {
      return state;
    }
  }
};

// class store {
//   constructor(state, reducer) {
//     this.state = state;
//     this.reducer = reducer;
//   }

//   getNow() {
//     return this.state;
//   }

//   dispatch(action) {
//     this.state = this.reducer(state, action);
//   }
// }

let state = { count: 0, todo: ["disco Dance", "wo!"] };
// let Store = new store(state, reducer);
let Store = createStore(reducer, state);
let action = { type: "int_incre", payload: ["do ur work", "bath", "paly"] };
Store.dispatch(action);
console.log(Store.getState());
