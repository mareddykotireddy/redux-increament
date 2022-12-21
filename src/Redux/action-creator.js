import {DECREMENT, INCREMENT } from "./action-types"
export const Increase = () => {
    { console.log('increment-in-action') }
    return {
        type: INCREMENT
    }
}
export const Decrease = () => {
    { console.log('decrement-in-action') }
    return {
        type: DECREMENT
    }
}


