import React from "react";
function GroceryList({ list, deleteItem, changeStatus} ) {
  let item = list.map((l) => (
    <div key={l.id} className="list-container">
      
      <div className="text-value">{l.text}</div>
      <div className="status-btn" onClick={() => changeStatus(l.id)}>{l.status ? "Completed" : "Incomplete"}</div>
      <button onClick={() => deleteItem(l.id)}>Delete</button>
    </div>
  ));

  return <div>{item}</div>;
}

export default GroceryList;
