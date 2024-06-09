import React from "react";

function Undoable({ stack, setStack, setNumber, setRedoList, redoList }) {
  const handleUndo = () => {
    if (stack.length) {
      const copyList = [...stack];
      const firstItem = copyList.shift();
      setStack(copyList);

      setNumber(firstItem.prev);
      const copyRedoList = [...redoList];
      copyRedoList.push(firstItem);
      setRedoList(copyRedoList);
    }
  };
  return (
    <>
      <div className="undoredo">
        <button onClick={handleUndo}>Undo</button>
        <button>Redo</button>
      </div>
    </>
  );
}

export default Undoable;
