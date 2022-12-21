// import React from 'react'
import { INCREMENT, DECREMENT } from "./action-types";
const initialvalue = {
    count: 0
}
function ReducerFile(state = initialvalue, action) {
    // console.log(action.type)
    switch (action.type) {
        case INCREMENT:
            console.log("reducer-increment")
            return {
                
                count: state.count + 1
            }
        case DECREMENT:
            console.log("reducer-decrement")
            return {
                
                count: state.count - 1
            }

        default:
            return state;
            break;
    }
}

export default ReducerFile
