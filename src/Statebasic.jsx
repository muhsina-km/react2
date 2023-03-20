import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {

    var [fname,setfname] = useState("Welcome")
    const changeName =()=>{
        setfname("Welcome to React")
    }



  return (
    <div>
      <Typography>Welcome {fname}</Typography>
      <br>
      </br>
      <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default Statebasic
