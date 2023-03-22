import {useState} from 'react'
import Button from '../Button/button'
const Counter = ()=> {
    const [count,setCount]= useState(0)
    
    const incrementar = () => {
        setCount(count + 1)
    }

    const reducir =()=>{
        setCount (count-1)
        if (count<1){
            setCount(0)
        }
    }


    return (
        <div>
            <h1>{count}</h1>
            <Button callback={reducir}label={"-"}/>
            <Button callback={incrementar} label ={"+"}/>
            
        </div>

    )
}
export default Counter

