import { BUY_CAKE } from "./cakeType";
import React from "react";

const intialstate = {
    numberofcakes:10
}

const cakeReducer = (state=intialstate,action)=>{
    // console.log("state in cakereducer",state);
    switch(action.type){
        case BUY_CAKE: 
        return {
            ...state,
            numberofcakes : state.numberofcakes - 1
        }

        default :
        return state

    } 
}

export default cakeReducer;