import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const HomeResults = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{"<="}</TableCell>
          <TableCell>{">"}</TableCell>
          <TableCell>{"#"}</TableCell>
          <TableCell>{"Result"}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow>
          <TableCell>{"1"}</TableCell>
          <TableCell>{"8"}</TableCell>
          <TableCell>{"1"}</TableCell>
          <TableCell>{"[1]"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{"3"}</TableCell>
          <TableCell>{"6"}</TableCell>
          <TableCell>{"2"}</TableCell>
          <TableCell>{"[2][2]"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{"5"}</TableCell>
          <TableCell>{"4"}</TableCell>
          <TableCell>{"3"}</TableCell>
          <TableCell>{"[3][3]"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{"7"}</TableCell>
          <TableCell>{"2"}</TableCell>
          <TableCell>{"2"}</TableCell>
          <TableCell>{"[4][4]"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{"8"}</TableCell>
          <TableCell>{"1"}</TableCell>
          <TableCell>{"1"}</TableCell>
          <TableCell>{"[5]"}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>{"9"}</TableCell>
          <TableCell>{"0"}</TableCell>
          <TableCell>{"1"}</TableCell>
          <TableCell>{"[6]"}</TableCell>
        </TableRow>
        
      </TableBody>
    </Table>
  );
};

export default HomeResults;
