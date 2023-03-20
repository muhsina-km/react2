import { Typography } from '@mui/material'
import React from 'react'

const Home = () => {
    var x=["muhsi","nikhil"]
  return (
    <div>
      <Typography variant='h4'>WELCOME</Typography>
      <ul>
        {x.map((value,index)=>{
            return <li key={index}>{value} </li>
        })}
      </ul>



    </div>
  )
}

export default Home
