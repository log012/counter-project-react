import { useState } from 'react'

import './App.css'

function App() {
  let[count,setCount]=useState(0);

  const AddCounter=()=>{
      setCount(count+1);
  }
  const RemoveCounter=()=>{
    if(count>0){
      setCount(count-1);
    }
   
  }
  return (
    <>
      <h1>The Counter App</h1>
       <h3>The Counter number:{count}</h3>
       <button onClick={AddCounter}>Add</button>
       <br/>
       <button onClick={RemoveCounter}>Remove</button>
    </>
  )
}

export default App
