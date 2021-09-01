const changeUserName = (state="", action) => {
    if(action.type === "CHANGE_USER") {
        return action.content;
    }
    return state;
}
const changeEmail = (state="", action) => {
    if(action.type === "CHANGE_EMAIL") {
        return action.content;
    }
    return state;
}

export {changeUserName, changeEmail};