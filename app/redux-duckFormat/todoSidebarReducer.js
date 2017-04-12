export function sidebarToggle() {
    return {
        type: 'TOGGLE_SIDEBAR',
        payload: true
    }
}

export default function reducer (state={
    open: false
}, action) {
    switch (action.type) {
    case 'TOGGLE_SIDEBAR':
        if(state.open) {
            return {...state, open: false};
        } else {
            return {...state, open: action.payload};
        }     
    default:
        return state;
    }
}