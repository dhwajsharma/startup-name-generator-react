import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const name = require("@rstacruz/startup-name-generator");

const App = () => {
  const [headerText, setHeaderText] = useState("Name it!");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames(inputText ? name(inputText) : []);
  };

  return (
    <div>
      <Header headerExpanded={headerExpanded} headTitle={headerText} />
      <SearchBox handleInputChange={handleInputChange} />
      <ResultsContainer suggestedNames={suggestedNames} />
    </div>
  );
};

export default App;
