

const createStore = (reducer) => {
    let state;
    const listeners = [];
    const getState = () => state;
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };
    const subscribe = (listener) => {
      listeners.push(listener);
    };
    dispatch({});
    return { getState, dispatch, subscribe };
  };


  const tallyReducer = (state = 0, action) => {
    switch (action.type) {
      case 'ADD':
        return state + 1;
      case 'SUBTRACT':
        return state - 1;
      case 'RESET':
        return 0;
      default:
        return state;
    }
  };
  
  
  const store = createStore(tallyReducer);
  store.subscribe(() => {
    console.log('State:', store.getState());
  });


  // Scenario 1: Increment the counter by one (initial state: 0)
  console.log('Scenario 1');
  console.log('Initial State:', store.getState());

  // Scenario 2: Increment the counter by one (initial state: 0)
  console.log('Scenario 2');
  store.dispatch({ type: 'ADD' });
  store.dispatch({ type: 'ADD' });

  // Scenario 3: Decrement the counter by one (initial state: 2)
  console.log('Scenario 3');
  store.dispatch({ type: 'SUBTRACT' });
  
  // Scenario 4: Resetting the Tally Counter (initial state: 1)
  console.log('Scenario 4');
  store.dispatch({ type: 'RESET' });