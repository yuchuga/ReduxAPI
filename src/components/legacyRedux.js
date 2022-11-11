/*
const initialState = {
  numofCakes: 10
}

//(previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      numofCakes: state.numofCakes - 1 //initial state - 1
    }
    default: return state
  }    
}
store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
*/