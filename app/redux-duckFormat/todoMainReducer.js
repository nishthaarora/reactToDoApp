export function itemsList(list) {
    return {
        type: 'ALL-ITEMS',
        payload: list
    }
}

export default function reducer (state={
    list: ''
}, action) {
    switch(action.type) {
        case 'ALL-ITEMS':
            return {...state, list: action.payload};
        default:
            return state;
    }

}