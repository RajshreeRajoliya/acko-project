
const defaultData = {
    isAuth: false,
    name: '',
    phone: '8111856270',
    email: '' 
}

function AuthReducer(state = defaultData, action){
    if(action.type === "LOGIN"){
        return {
            ...state,
            isAuth: true,
            phone: action.payload
        }
    }else if(action.type === 'ADD_DETAIlS'){
        return {
            ...state,
            name: action.payload.name,
            email: action.payload.email
        }
    }
    return state;
}

export default AuthReducer;