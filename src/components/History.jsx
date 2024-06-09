import React from "react";

function History({ stack }) {
  return (
    <div className="stack">
      <p>History of All States</p>
      {stack.length === 0 ? (
        <p>No history available</p>
      ) : (
        stack.map((item, index) => (
          <div key={index} style={{ fontSize: "15px" }}>
            Action: {item.action}, Previous: {item.prev}, Current: {item.curr}
          </div>
        ))
      )}
    </div>
  );
}

export default History;
