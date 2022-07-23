import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Box,
} from "@mui/material";

const HomeResults = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ width: "25px" }}>{"<="}</TableCell>
          <TableCell sx={{ width: "25px" }}>{">"}</TableCell>
          <TableCell sx={{ width: "25px" }}>{"#"}</TableCell>
          <TableCell>{"Result"}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.results.map((die, ix) => (
          <TableRow key={ix}>
            <TableCell>{die.numGTE}</TableCell>
            <TableCell>{die.numLT}</TableCell>
            <TableCell>{die.rolls}</TableCell>
            <TableCell>
            <Box display= 'flex' sx={{ alignItems: 'flex-start' }}>
              {[...Array(die.rolls).keys()].map((n) => (
                <Avatar key={n} variant="rounded" sx={{width:'25px', height:'25px', margin:'1px' }}>{ix + 1}</Avatar>
              ))}
              </Box>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HomeResults;
