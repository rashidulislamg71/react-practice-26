import React, { useState } from "react";

function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);

  // const handleSingle = () => {
  //   const newSingle = runs + 1;
  //   setRuns(newSingle);
  // };
  // const handleDuble = () => {
  //   const newSingle = runs + 2;
  //   setRuns(newSingle);
  // };
  // const handleFour = () => {
  //   const newSingle = runs + 4;
  //   const fourCount = fours + 1;
  //   setFours(fourCount);
  //   setRuns(newSingle);
  // };
  // const handleSix = () => {
  //   const newSingle = runs + 6;
  //   const sixCount = sixes + 1;
  //   setSixes(sixCount);
  //   setRuns(newSingle);
  // };

  const updateScore = (score) => {
    setRuns((prev) => prev + score);
    if (score === 4) {
      setFours((prev) => prev + 1);
    } else if (score === 6) {
      setSixes((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>Runs</h1>
      <h3>Four: {fours}</h3>
      <h3>Sixes: {sixes}</h3>
      <h3>Total Runs: {runs}</h3>

      <button onClick={() => updateScore(1)}>Single</button>
      <button onClick={() => updateScore(2)}>Duble</button>
      <button onClick={() => updateScore(3)}>Three</button>
      <button onClick={() => updateScore(4)}>Four</button>
      <button onClick={() => updateScore(6)}>Six</button>
    </div>
  );
}

export default Batsman;
