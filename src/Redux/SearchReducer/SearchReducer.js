
const defaultData = {
    vehicleNumber:''
}

function SearchReducer(state = defaultData, action){
    if(action.type==='update'){
        return {
            ...state,vehicleNumber:action.payload
        }
    }else{
        return state;
    }
    
}

export default SearchReducer;