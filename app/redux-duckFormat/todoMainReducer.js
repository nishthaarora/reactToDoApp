import axios from 'axios';

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
            let newState = ''
            if(action.payload.data) {
                newState = action.payload.data.data
            } else {
                newState = action.payload
            }
            return {...state, list: newState}
        default:
            return state;
    }

}


export function fetchPosts( list ) {
  return (dispatch) => {
    if( !list ) {
    return axios.get('/api/get')
      .then( list => dispatch( itemsList( list ) ) );
    } else {
        dispatch( itemsList( list ) );
    }

  }
}