import React, { useState } from 'react'
import './App.css'

const Sayac = (props) => {

    const [count,setcount]=useState(0);

    const plus = ()=>{
        setcount(count + props.number);
    }
    const minus = () =>{
        setcount(count - props.number);
    }

  return (
    <div className='container'>
    <p>Counter App</p>
    <div className='count'>{count}</div>
    <div className="buttons">
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>    
    </div>
    </div>
  )
}

export default Sayac
