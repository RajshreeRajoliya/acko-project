
export const addTotal = (total)=> {
    return (dispatch, getState)=> {
        return dispatch({
            type: 'ADD_TOTAL',
            payload: total,
        })
    }
}

export const addPinCode = (pin)=> {
    return (dispatch, getState)=> {
        return dispatch({
            type: 'PIN_CODE',
            payload: pin
        });
    }
}

export const addModelNumber = (number)=> {
    return function(dispatch, getState){
        return dispatch({
            type: 'MODEL_NUMBER',
            payload: number
        })
    }
}


export function updateSearch(query){
    return function(dispatch, getState){
        return dispatch({type:'UPDATE',
        payload:query
    });
    }
}
