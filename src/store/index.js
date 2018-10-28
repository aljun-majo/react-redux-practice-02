import { createStore } from 'redux';

// const initalState = {
//     count: 0
// };

// const reducer = (state = initalState, action) => {
//     //action type dispatch from Counter.js inside mapDispatchToProps()
//     console.log('store/index.js - Reducer running...', action);

//     switch (action.type) {
//         case 'INCREMENT':
//             //return Object.assign({}, state, { count: state.count + 1});
//             return {
//                 ...state,
//                 count: state.count + 1
//               };    
//         default:
//             return state;
//     }
// }


// const store = createStore(reducer);

//part 3
const intialState = {
    inputValue: ''
}

const reducer = (state = intialState, action) => {
    console.log('store/index.js', action);

    switch (action.type) {
        case 'INPUT_CHANGE':
            return Object.assign(
                {},
                state,
                { inputValue: action.text }
            )
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;