export const login = (number) => {
    return (dispatch , getState)=>{
        return dispatch ({
        type : "LOGIN",
        payload : number
    })
    } 
}

export const addDetails = ( details )=> {
    return (dispatch, setState)=> {
        return dispatch({
            type: 'ADD_DETAIlS',
            payload: details
        })
    }
 }
