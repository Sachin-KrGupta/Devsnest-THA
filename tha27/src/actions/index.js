function addItem(item) {
    return {
        type: "ADD",
        item: item
    };
}

function removeItem(id) {
    return {
        type: "REMOVE",
        id: id
    };
}

function clearAll() {
    return {
        type: "CLEAR_ALL"
    };
}

export {addItem, removeItem, clearAll};