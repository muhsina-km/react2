import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Sample = () => {

    var [fname,setfname] = useState(" ")
    const changeName =(event)=>{
        const {name,value} = event.target;
        setfname(value);
    }

    useEffect(() => {
        setfname("[Enter Name]")
    },[])
    

  return (
    <div>
        <br></br>
      <Typography variant='h3'>My Name is {fname} </Typography>
      <br></br>
      <TextField label="Enter Name" variant="outlined" onChange={(e) => changeName(e)} />
      
    </div>
  )
}

export default Sample
