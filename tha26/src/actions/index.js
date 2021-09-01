const changeUsername = (content) => {
    return {
        type: "CHANGE_USER",
        content: content,
    };
}

const changeEmail = (content) => {
    return {
        type: "CHANGE_EMAIL",
        content: content,
    };
}

export {changeUsername, changeEmail}