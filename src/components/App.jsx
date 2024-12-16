import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [name, setName] = useState("");

  function handleClick() {
    setHeadingText(name);
  }
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
