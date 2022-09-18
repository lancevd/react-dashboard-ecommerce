
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './Table.css';
  


function createData(Product, TrackingId, Date, Status) {
  return { Product, TrackingId, Date, Status };
}

const rows = [
  createData('Chicken Fry Lasagna', 18987822, '2 April 2022', 'Approved'),
  createData('Slim Jims', 18987854, '2 April 2022', 'Pending'),
  createData('Pepperoni Pizza', 18987833, '2 April 2022', 'Approved'),
  createData('Chickenn Nuggets', 18987888, '2 April 2022', 'Delivered'),
];

const makeStyles=(status)=>{
    if(status ==='Approved')
    {
        return  {
            background: 'green',
            color: '#fff',
            padding: '3px'
        }
    } else if(status ==='Pending')
    {
        return  {
            background: 'red',
            color: '#fff',
            padding: '3px'
        }
    } else if(status ==='Delivered')
    {
        return  {
            background: 'skyblue',
            color: '#fff',
            padding: '3px'
        }
    }
}

export default function BasicTable() {
  return (
    <div className='Table'> 
          <h3>Recent Orders</h3>
        <TableContainer component={Paper}
        style={{boxShadow: '0 13px 20px 0px #80808029'}}
        >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Tracking ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.Product}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.Product}
                </TableCell>
                <TableCell align="left">{row.TrackingId}</TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">
                    <span className='status' style={makeStyles(row.Status)}>{row.Status}</span>    
                </TableCell>
                <TableCell align="left" id='Details'
                style={{color: '#00b5ff'}}
                >Detail</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
