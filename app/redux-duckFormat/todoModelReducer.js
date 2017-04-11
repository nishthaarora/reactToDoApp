export function todoItem (item) {
    if(item) {
        return {
            type: 'TODO_ITEM',
            payload: item
        }
    } else {
        return false;
    }
}

export function todoList (list) {
    if(list) {
        return {
            type: 'TODO_LIST',
            payload: list
        }
    } else {
        return false;
    }
}


export default function reducer(state={
    item: '',
}, action) {
    switch(action.type) {
        case 'TODO_ITEM':
            return {...state, item:action.payload};
        // case 'TODO_LIST':

            // return {...state, }
        default:
            return state;
    }
}