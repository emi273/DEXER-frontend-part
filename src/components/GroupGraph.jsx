import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ShapleyGraph from './ShapleyGraph';
import { Button } from 'bootstrap';



function GroupGraph(props) {
    console.log("Emmiiii - groupGraph2")
    console.log(props.data)

    const [ifShowShapleyGraph, setIfShowShapleyGraph] = useState(false);
    const [shapleyGraphData, setShapleyGraphData] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState("");
    const [selectedK, setSelectedK] = useState(0);


    // function createData(
    //     group,
    //     size,
    //     k,
    // ) {
    //     return { group, size, k };
    // }

    // const rows = [
    //     createData('Female, Black, 40-60', 124, 10),
    //     createData('Male, Asian, Elementry Education1', 55, 10),
    //     createData('Male, Asian, Elementry Education2', 44, 11),
    //     createData('Male, Asian, Elementry Education333', 77, 12),

    // ];

    const handleShapleyValue = (k, group, size) => {
        console.log(k, group, size);
        const data = {
            k: k,
            group: group,
            size: size,
        };
        fetch("http://localhost:3000/getShapleyValues", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data2) => {
                console.log("i here!!!!")
                console.log(data2);
                setIfShowShapleyGraph(true)
                setShapleyGraphData(data2)
                setSelectedGroup(group)
                setSelectedK(k)
            })
            .catch(error => console.error(error));

    }

    return (
        <div id="chart">
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Group</TableCell>
                            <TableCell align="right">Size</TableCell>
                            <TableCell align="right">K</TableCell>
                            <TableCell align="right">Size top k</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map(([group, size, k, size_top_k]) => (
                            <TableRow
                                key={group}>
                                <TableCell>{group}</TableCell>
                                <TableCell align="right">{size}</TableCell>
                                <TableCell align="right">{k}</TableCell>
                                <TableCell align="right">{size_top_k}</TableCell>
                                <button onClick={() => handleShapleyValue(k, group, size)} className='shapleyValuesButton'>Explain</button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {ifShowShapleyGraph ? <ShapleyGraph data={[shapleyGraphData, selectedGroup, selectedK]} /> : null}
        </div>
    );
}
export default GroupGraph;