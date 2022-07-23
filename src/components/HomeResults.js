import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Box,
  ButtonBase,
} from "@mui/material";
import { blue } from '@mui/material/colors';

const HomeResults = (props) => {
  const reroll = (rerolledValue) => {
    let numSides = props.results.length;
    let roll = Math.floor(Math.random() * numSides) + 1;

    let tempArray = [...props.results];
    tempArray[rerolledValue].rolls--;
    tempArray[roll-1].numRerolled++;

    props.setResults(tempArray);
  };

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
            <TableCell>{die.rolls + die.numRerolled}</TableCell>
            <TableCell>
              <Box display="flex" sx={{ alignItems: "flex-start" }}>
                {[...Array(die.rolls).keys()].map((n) => (
                  <ButtonBase key={n} onClick={() => reroll(ix)}>
                    <Avatar
                      variant="rounded"
                      sx={{ width: "25px", height: "25px", margin: "1px" }}
                    >
                      {ix + 1}
                    </Avatar>
                  </ButtonBase>
                ))}
                {[...Array(die.numRerolled).keys()].map((n) => (
                    <Avatar
                      variant="rounded"
                   
                      sx={{ width: "25px", height: "25px", margin: "1px", bgcolor: blue[500]  }}
                    >
                      {ix + 1}
                    </Avatar>
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
