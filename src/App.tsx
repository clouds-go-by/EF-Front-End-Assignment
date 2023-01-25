import React from "react";
import "./App.css";
import { Button } from "./button/Button";
import { ReactComponent as Umbrella } from "./button/umbrella.svg";

function App() {
  return (
    <div className="App">
      {/*<p>Add your buttons here, both variants plus disabled</p>*/}
      <Button>
        Primary
        <Umbrella />
      </Button>
      <Button disabled>
        Primary
        <Umbrella />
      </Button>
      <Button variant="secondary">
        Secondary
        <Umbrella />
      </Button>
      <Button variant="secondary" disabled>
        Secondary
        <Umbrella />
      </Button>
    </div>
  );
}

export default App;
