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

export default function reducer(state={
    item: '',
}, action) {
    switch(action.type) {
        case 'TODO_ITEM':
            return {...state, item: action.payload};
        default:
            return state;
    }
}