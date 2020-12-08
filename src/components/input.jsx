import React from "react";

function input({ lblid, lblTxt, inId, inValue, inType, autoFocus, onChange }) {
  return (
    <div>
      <label htmlFor={lblid}>{lblTxt}</label>
      <input
        id={inId}
        name={inId}
        value={inValue}
        type={inType}
        className="form-control"
        autoFocus={autoFocus}
        onchange={onChange}
      />
    </div>
  );
}

export default input;
