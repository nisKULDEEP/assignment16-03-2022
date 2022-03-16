import React from "react";
// import GroceryList from "./GroceryList";

var GroceryInput = ({addItem}) => {
  const [changeValue, setChangeValue] = React.useState("");

  function renderText(text) {
    setChangeValue(text.target.value);
    // console.log(text.target.value);
    // console.log({addItem});
  }

  return (
    <div className="input-body">
      <input
        type="text"
        placeholder="Type Grocery Items"
        value={changeValue}
        onChange={renderText}
        onKeyDown ={(e) => e.key === 'Enter' ? addItem(changeValue) || setChangeValue(" ") : true}
      />
      <button onClick={() => {
          {changeValue == "" ? alert("Empty Input Box") : addItem(changeValue) }
          setChangeValue("");
          }} >Add</button>
    </div>
  );
};

export default GroceryInput;
