
const defaultData = {
    total: 0,
    bikeNumber: 'ECM9076',
    modelNumber: 'Bajaj Pulsar 150',
    pinCode: '680301'
}

function DataReducer(state = defaultData, action){
    if(action.type === 'ADD_TOTAL'){
        return {
            ...state,
            total: action.payload
        }
    }else if(action.type === 'PIN_CODE'){
        return {
            ...state,
            pinCode: action.payload
        }
    }else if(action.type === 'MODEL_NUMBER'){
        return {
            ...state,
            modelNumber: action.payload
        }
    }

    return state;
}

export default DataReducer;