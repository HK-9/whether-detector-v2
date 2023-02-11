const initialData = {
    whetherData:[],
}

export const whetherReducer = (state = initialData,action)=>{
    switch(action.type){
        case 'GET_WHETHER' : {
            return {
                ...state,
                whetherData : action.payload
            }
        }
        default:return state
    }
} 