const intialState = {
    numOfCakes: 10
}

const cakesReducer = (state = intialState, action) => {
    switch(action.type) {
        case "BUY_CAKE": 
        return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

export default cakesReducer