const initialState = {
    currentUser: {}
  }
  
  export default function reducer(state = initialState, action) {
      switch (action.type) {
        case 'LOGIN':
          return {...state, currentUser: action.payload}
        default:
          return state;
      }
    }