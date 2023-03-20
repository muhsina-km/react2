import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'



const Tablee = () => {
  var p=[{name:"muhsi",age:20,place:"muttichur"},
  {name:"nikhil",age:19,place:"kallur"},
  {name:"tiya",age:25,place:"koratty"}
  ]
  
    
  return (
    <div>
<TableContainer>
  <Table>
    <TableHead>
      <TableRow component={Paper}>
        <TableCell>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Place</TableCell>
        
      </TableRow>
    </TableHead>
    <TableBody>
      {p.map((value,index)=>{
        return<TableRow>
          <TableCell key={index}>{value.name}</TableCell>
          <TableCell key={index}>{value.age}</TableCell>
          <TableCell key={index}>{value.place}</TableCell>
        </TableRow>
      })}
    </TableBody>
  </Table>
</TableContainer>

    </div>
  )
}

export default Tablee
