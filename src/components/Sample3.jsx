import { Typography,TextField } from '@mui/material'
import React, { useState } from 'react'

const Sample3 = () => {

     var [inputname,Setinputname] = useState({
        fname:"",
        lname:''
     })

     const inputHandler = (e) => {
        const {name,value} = e.target 
        Setinputname({...inputname,[name]:value})
     }

  return (
    <div>
        <br></br>
        <Typography variant='h4'>First Name is {inputname.fname} </Typography>
        <TextField label='first Name' variant='outlined' 
           name='fname' value={inputname.fname} onChange={inputHandler} />   
        <br></br>
        <br></br>
        <Typography variant='h4'>Second Name is {inputname.lname} </Typography>
        <TextField label='Second Name' variant='outlined' 
           name='lname' value={inputname.lname} onChange={inputHandler} />   
    </div>
  )
}

export default Sample3
