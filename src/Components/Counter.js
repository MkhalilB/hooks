import { useEffect, useState } from "react"

const Counter=()=>{
    const [count,setCount] = useState(0)
    const [textP,setTextP] = useState('')
    const increment =()=>setCount(count+1)
    const decrement =()=>count>0 && setCount(count-1)
    //mount
    useEffect(()=>{
        console.log('mount')
    },[])
    //update si ya pas de tableau donc on parle du tou changement
    useEffect(()=>{
        console.log('update')
    },[count])
    // unmount
    useEffect(()=>{return()=>console.log('unmount')},[])
    return(
        <div>
            <h2>Counter Componet</h2>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <br/>
            <input type="text" onChange={(e)=>setTextP (e.target.value)}/>
            <h3>{textP}</h3>
        </div>
    )
}
export default Counter