import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from 'bootstrap';
//import Paper from '@mui/material/Paper';

function createData(
    group,
    size,
    k,
) {
    return { group, size, k };
}

const rows = [
    createData('Female, Black, 40-60', 124, 10),
    createData('Male, Asian, Elementry Education1', 55, 10),
    createData('Male, Asian, Elementry Education2', 44, 11),
    createData('Male, Asian, Elementry Education333', 77, 12),

];

export default function BasicTable() {
    return (
        <TableContainer >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Group</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">K</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.group}>
                            <TableCell>{row.group}</TableCell>
                            <TableCell align="right">{row.size}</TableCell>
                            <TableCell align="right">{row.k}</TableCell>
                            <button className='shapleyValuesButton'>Shapley Values Graph</button>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}