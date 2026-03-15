import React, { useState } from "react";

function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);
  const [fours, setFours] = useState(0);

  const handleSingle = () => {
    const newSingle = runs + 1;
    setRuns(newSingle);
  };
  const handleDuble = () => {
    const newSingle = runs + 2;
    setRuns(newSingle);
  };
  const handleFour = () => {
    const newSingle = runs + 4;
    const fourCount = fours + 1;
    setFours(fourCount);
    setRuns(newSingle);
  };
  const handleSix = () => {
    const newSingle = runs + 6;
    const sixCount = sixes + 1;
    setSixes(sixCount);
    setRuns(newSingle);
  };

  return (
    <div>
      <h1>Runs</h1>
      <h3>Four:{fours}</h3>
      <h3>Sixes:{sixes}</h3>
      <h3>Total Runs: {runs}</h3>

      <button onClick={handleSingle}>Single</button>
      <button onClick={handleDuble}>Duble</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}

export default Batsman;
