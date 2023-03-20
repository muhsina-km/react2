import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Sample2 = () => {

    var [fname,setfname] = useState(" ")
    const changeName =(event)=>{
        const {name,value} = event.target;
        setfname(value);
    }    
    useEffect(() => {
        setfname("[FirstName]")
    },[])

    
    var [fname2,setfname2] = useState(" ")
    const changeName2 =(event)=>{
        const {name,value} = event.target;
        setfname2(value);
    }     
    useEffect(() => {
        setfname2("[SecondName]")
    },[])

  return (
    <div>
      <br></br>
      <Typography variant='h5'>First Name is  {fname} </Typography>
      <br></br>  
      <TextField label='first Name' variant='outlined' onChange={(e) => changeName(e)} />
      <br></br>
      <br></br>
      <Typography variant='h5'>Second Name is  {fname2} </Typography>
      <br></br>
      <TextField label='second Name' variant='outlined' onChange={(e) => changeName2(e)} />
      
    </div>
  )
}

export default Sample2
