import React, {useState} from "react";
import "./App.scss";
import Enter from "./content/entry/Enter";
import Home from "./home/Home";

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div>
      {!hasEntered && <Enter onEnter={handleEnter} />}
      {hasEntered && <Home />}
    </div>
  );
}

export default App;