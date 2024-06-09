import React, { useState } from "react";
import Numbers from "./components/Numbers";
import Undoable from "./components/Undoable";

function App() {
  const [number, setNumber] = useState(0);
  const [stack, setStack] = useState([]);
  const [redoList, setRedoList] = useState([]);

  return (
    <>
      <h1>Undoable Counter</h1>
      <div className="container">
        <Undoable
          stack={stack}
          setStack={setStack}
          setNumber={setNumber}
          setRedoList={setRedoList}
          redoList={redoList}
        />
        <Numbers
          number={number}
          setNumber={setNumber}
          stack={stack}
          setStack={setStack}
        />
      </div>
    </>
  );
}

export default App;
