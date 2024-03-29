import React, { useState } from "react";
import { Button, ButtonGroup, Grid } from "@mui/material";

const HomeControls = (props) => {
  //const [results, setResults] = useState([]);
  const [numDice, setNumDice] = useState(1);
  const [numSides, setNumsides] = useState(6);

  const adjustDiceCount = (num) => {
    //Minimum of 1 die must be rolled
    setNumDice((x) => Math.max(x + num, 1));
  };

  const adjustNumSides = (num) => {
    //Minimum of 2 sides required per die
    setNumsides((x) => Math.max(x + num, 2));
  };

  const roll = () => {
    let res = [...Array(numSides).keys()].map((v) => ({
      rolls: 0,
      numGTE: numDice,
      numRerolled: 0,
    }));

    for (let i = 0; i < numDice; i++) {
      let roll = Math.floor(Math.random() * numSides) + 1;
      res[roll - 1].rolls++;
    }

    let subTotal = 0;
    for (let m = numSides-1; m >= 0; m--) {
      subTotal = subTotal + res[m].rolls;
      res[m].numGTE = subTotal;
    }

    props.setResults([...res]);
  };

  return (
    <Grid container spacing={1} mt={2}>
      <Grid item xs={3}>
        <ButtonGroup orientation="vertical">
          <Button
            color="primary"
            variant="contained"
            onClick={() => adjustNumSides(1)}
          >
            +1
          </Button>
          <Button color="primary" variant="contained" disabled>
            {numSides} sided
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => adjustNumSides(-1)}
          >
            -1
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => adjustDiceCount(1)}
              sx={{
                width: "100%",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
              }}
            >
              +1
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => adjustDiceCount(5)}
              sx={{
                width: "100%",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
              }}
            >
              +5
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setNumDice(1)}
              sx={{ width: "100%", borderRadius: 0 }}
            >
              Reset to 1
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => adjustDiceCount(-1)}
              sx={{
                width: "100%",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              -1
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => adjustDiceCount(-5)}
              sx={{
                width: "100%",
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              -5
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => roll()}
          sx={{ height: "100%" }}
        >
          Roll {numDice} {numDice === 1 ? "die" : "dice"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeControls;
