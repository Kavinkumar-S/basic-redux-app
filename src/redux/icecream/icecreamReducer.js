const intialstate = {
    numoficecream:20
}

const IcecreamReducer = (state=intialstate,action)=>{

    switch (action.type) {
        case "BUYICECREAM":
            return {
                ...state,
                numoficecream:state.numoficecream-1
            }
    
        default:
           return state
    }

}

export default IcecreamReducer
