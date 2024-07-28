import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack } from '@mui/material';
import useFetch from '../../api/useFetch';
import axios from 'axios';

export default function DashboadPage() {
  const {data} = useFetch("http://localhost:1337/api/blogs")

  const handleDelete =async (blog)=>{

    try {
        const res = await axios?.delete(`http://localhost:1337/api/blogs/${blog}`)
        if (res)     window.location.reload(true);

    }catch(err){
      console.error(err)
    }
  }
  return (
    <><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">type</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row?.attributes?.title}</TableCell>
              <TableCell align="right">{row?.attributes?.description}</TableCell>
              <TableCell align='center'>
                <Stack direction={'row'} justifyContent={"center"}>
                  <Button>Edit</Button>
                  <Button onClick ={()=>handleDelete(row?.id)}>Delete</Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></>
  );
}
