import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";

const HomeTitle = () => {
  const [slogan, setSlogan] = useState("");

  const slogans = [
    "Dice were hurt while testing this product",
    "Dank memes save lives",
    "Totally fair",
    "Definitly not biased",
    "Trump approved",
    "Funded by the Bill and Melinda Gates Foundation",
    "The source of global warming",
    "Worse than advertised",
    "MADE WITH A BROKEN CAPS LOCK KEY",
    "Featured on Toonami",
    "Not available in other languages",
    "R.I.P. Tsubaki box",
    "Twitch streaming favorite",
    "Released prematurely",
    "Fortified with vitamin D",
    "May cause heartburn",
  ];

  const title = "Extreme Dice Rolling Simulator";

  useEffect(() => {
    setSlogan('"' + slogans[Math.floor(Math.random() * slogans.length)] + '"');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack mt={3}>
      <Box display="flex" justifyContent="center">
        <Typography variant="h5" gutterBottom={false} display="block">
          {title}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="caption" display="block">
          {slogan}
        </Typography>
      </Box>
    </Stack>
  );
};

export default HomeTitle;
