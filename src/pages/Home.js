import React, { useState, useEffect } from "react";
import {
  LooksOne,
  LooksTwo,
  Looks3,
  Looks4,
  Looks5,
  Looks6,
} from "@material-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";

const Home = () => {
  const [results, setResults] = useState([]);
  const [numDice, setNumDice] = useState(1);
  const [title2, setTitle2] = useState('');

  const titles = [    
    "Dice were hurt while testing this product",
    "Dank memes save lives",
    "Totally fair",
    "Definitly not biased",
    "Trump approved",
    "Inspired by Bill Gates",
    "The source of global warming",
    "Worse than advertised",
    "MADE WITH A BROKEN CAPS LOCK KEY",
    "Source of the deep state conspiracy",
    "Now with Russian interference",
    "Funded by beer can deposits",
    "Not available in other languages",
    "R.I.P. Tsubaki box",
    "Twitch streaming favorite",
    "Released prematurely",
    "Fortified with vitamin D",
    "May cause heartburn",
  ];

  const title1 = "Extreme Dice Rolling Simulator";

  useEffect(() => {
    setTitle2('"' + titles[Math.floor(Math.random() * titles.length)] + '"');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const adjustDiceCount = (num) => {
    setNumDice((x) => Math.max(x + num, 1));
  };

  const roll = () => {
    let defaultVal = [1, 2, 3, 4, 5, 6].map((v) => ({ die: v, rolls: 0 }));

    let rolls = defaultVal;
    for (var i = 0; i < numDice; i++) {
      let res = Math.floor(Math.random() * 6) + 1;
      let r = rolls.find((x) => x.die === res);
      r.rolls++;
    }
    setResults([...rolls]);
    setTitle2('"' + titles[Math.floor(Math.random() * titles.length)] + '"');
  };

  useEffect(() => {
    let defaultVal = [1, 2, 3, 4, 5, 6].map((v) => ({ die: v, rolls: 0 }));
    setResults(defaultVal);
  }, []);

  const lookupIcon = (num) => {
    switch (num) {
      case 1:
        return <LooksOne fontSize="large" />;
      case 2:
        return <LooksTwo fontSize="large" />;
      case 3:
        return <Looks3 fontSize="large" />;
      case 4:
        return <Looks4 fontSize="large" />;
      case 5:
        return <Looks5 fontSize="large" />;
      case 6:
        return <Looks6 fontSize="large" />;
      default:
      // code block
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={3}>
        <Typography variant="h5" gutterBottom={false} display="block">
          {title1}
        </Typography>
        <Typography variant="caption" display="block">{title2}</Typography>
      </Box>

      <ButtonGroup>
        <Button
          color="primary"
          variant="contained"
          onClick={() => adjustDiceCount(-5)}
        >
          -5
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => adjustDiceCount(-1)}
        >
          -1
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setNumDice(1)}
        >
          1
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => adjustDiceCount(1)}
        >
          +1
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => adjustDiceCount(5)}
        >
          +5
        </Button>
        <Button
          flexGrow={1}
          color="primary"
          variant="contained"
          onClick={() => roll()}
        >
          Roll {numDice} {numDice === 1 ? " die" : "dice"}
        </Button>
      </ButtonGroup>

      <List>
        {results.map((r) => (
          <>
            {r.rolls ? (
              <>
                <ListItem>
                  <Box display="flex" flexWrap="wrap">
                    {[...Array(r.rolls).keys()].map((x) => (
                      <Box key={x}>{lookupIcon(r.die)}</Box>
                    ))}
                    <Typography variant="button" display="block">({r.rolls})</Typography>
                  </Box>
                </ListItem>
              </>
            ) : null}
          </>
        ))}
      </List>
    </Container>
  );
};

export default Home;
