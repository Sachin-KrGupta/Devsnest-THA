function todoReducer(state=[],action) {
    if(action.type==="ADD") {
        return [...state,action.item];
    } else if(action.type==="REMOVE") {
        return state.filter((item, index) => index!==action.id);
    }
    else if(action.type==="CLEAR_ALL") {
        return [];
    }
    return state;
}

export default todoReducer;