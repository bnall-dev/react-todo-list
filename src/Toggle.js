import React from 'react';

function Toggle(props) {
  return (
    <div id="toggle">
      <label htmlFor="toggleBox" id="toggleLabel">
        {props.hideButton}
      </label>
      <input
        type="checkbox"
        id="toggleBox"
        onChange={props.handleToggle}
      ></input>
    </div>
  );
}

export default Toggle;
