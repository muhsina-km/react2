import { Button, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Validation = () => {

    var[submitted, setsubmitted] = useState(false);
    var [inputname,Setinputname] = useState({
        fname:""
    })

    var [validation,Setvalidation] = useState({
        fname:""
    })

    const inputHandler = (e) => {
        const {name,value} = e.target 
        Setinputname({...inputname,[name]:value})
     }

     const checkv = () => {
        let errors = validation;

     //first name validation
     
     if (!inputname.fname.trim()) {
        errors.fname = "first name is requried";
     }
     else {
        errors.fname = "";
     }
     Setvalidation(errors);
     }

     useEffect(() => {
        checkv();
     })

    const handlesubmit = (e) => {
        e.preventDefault();
        setsubmitted(true);
    }
    

 return (
    <div>

        <form
           onSubmit={handlesubmit}>

        <br></br>
        <br></br>
        <TextField label='First Name' variant='outlined' 
           name='fname' value={inputname.fname} onChange={inputHandler} />  
        <br></br>
        {(validation.fname && submitted) && <p>{validation.fname}</p>}
        <br></br>
        <br></br>
        <br></br>
        <Button type='submit' variant='contained'> save </Button>
        </form>
      
    </div>
  )
}

export default Validation
