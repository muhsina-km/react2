import React from 'react'

const Loop = () => {
    var x=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
        
      <ul>
        {x.map((value,index)=>{
            return <li key={index}>{value} </li>
        })}
      </ul>

    </div>
  )
}

export default Loop
