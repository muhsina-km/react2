import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Change = () => {
    var [fname,setfname] = useState("Home")
    const hname =()=>{
        setfname("Home Page")
    }
    const gname =()=>{
        setfname("Gallary Page")
    }
    const cname =()=>{
        setfname("Contact Page")
    }
  return (
    <div>
        <br></br>
        <br></br>
      <Button variant="contained" color="primary" onClick={hname}>HomePage</Button>
      <Button variant="contained" color="secondary" onClick={gname}>Gallery Page</Button>
      <Button variant="contained" color="success" onClick={cname}>Contact Page</Button>
      <br></br>
      <br></br>
      <Typography variant='h3'>Welcome to {fname} </Typography>
    </div>
  )
}

export default Change
