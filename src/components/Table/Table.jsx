import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'


function createData( name, tracking_id, date, status) {
  return { name, tracking_id, date, status };
}

const rows = [
  createData('Frozen yoghurt', 196785, "2 Feb 2023", "Approved"),
  createData('Ice cream sandwich', 124737, "7 May 2023", "Pending"),
  createData('Eclair', 253637, "12 June 2023", "Approved"),
  createData('Cupcake', 305536, "21 July 2023", "Pending"),
  createData('Gingerbread', 3568723, "1 Jan 2023", "Delivered"),
];

const makeStyles=(status)=>{
  if(status==="Approved"){
    return{
      background:'rgb(145 254 159 / 47%)',
      color:'green'
    }
  }else if (status==="Pending"){
    return{
      background:"#ffadad8f",
      color:'red'
    }
  }else{
    return{
      background:"#59bfff",
      color:'white'
    }
  }
}

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Transactions</h3>
   
    <TableContainer component={Paper}
    style={{boxShadow:'0 13px 20px 0 #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              
              <TableCell align="left">{row.tracking_id}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span></TableCell>
                <TableCell align="left" className='Details'>Detail</TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
