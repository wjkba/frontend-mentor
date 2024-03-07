import { useState } from "react";
import "./App.css";
import Comments from "./Components/Comments";
import Data from "./data.json";
function App() {
  return (
    <>
      <div className="grid-center">
        <Comments currentUser={Data.currentUser.username} />
      </div>
    </>
  );
}

export default App;
