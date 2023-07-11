import React, { useState } from "react";

const App = () => {
     const [name, setName] = useState("");
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    return (
      <div>
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        {name && <p>Hello {name} !</p>}
      </div>
    );
  };
  
  

export default App;
