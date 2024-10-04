import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  
  const [name,setName]=useState('Miya')
  const age=22;
    return (
    <div>
        <Child fname={name} fage={age}/>  


    </div>
  )
}

export default Parent
