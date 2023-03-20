import { Button,Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[num,fnum] = useState(0)
    const inum =() =>{
        fnum(num++)
    }
    const dnum =() =>{
        fnum(num--)
            }
          
  return (
    <div>
      <br></br>
    <Typography variant='h2'>{num}</Typography>
    <Button variant='contained'  color="primary"  onClick={inum}>+</Button> <br></br>
    <br></br>
    <Button variant='contained' color="primary" onClick={dnum}>-</Button>  
    </div>
  )
}

export default Counter
