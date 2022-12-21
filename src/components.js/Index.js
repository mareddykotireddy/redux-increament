import React from 'react'
import {useDispatch,useSelector} from'react-redux'
import{Increase,Decrease} from'../Redux/action-creator'
const Index = ({ Hello}) => {
    const selectedData=useSelector((state)=>state.count)
    const dispatch=useDispatch()
    console.log("selectedData",selectedData) 

 return (
    <div style={{
        textAlign: 'center'
    }}>
      <h1> {Hello}</h1>
      <h1>{selectedData}</h1>
    <button  type="button" onClick={()=>dispatch(Increase())}
    >Increment</button>
   
    <button  type="button" onClick={()=>dispatch(Decrease())}
    >Decrement</button>
    </div>
  )
}

export default Index
