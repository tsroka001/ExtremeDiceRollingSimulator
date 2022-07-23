import React, { useState } from "react";
import { Container } from "@mui/material";
import HomeTitle from "../components/HomeTitle";
import HomeControls from "../components/HomeControls";
import HomeResults from "../components/HomeResults";

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <Container maxWidth="xs">
      <HomeTitle />
      <HomeControls setResults={setResults} />
      <HomeResults results={results} />
    </Container>
  );
};

export default Home;
