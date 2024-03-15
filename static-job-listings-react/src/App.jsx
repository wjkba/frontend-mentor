import { useState } from "react";

import "./App.css";
import "./normal.css";
import JobOffer from "./components/JobOffer";
import Offers from "./components/Offers";
import FilterBar from "./components/FilterBar";

function App() {
  let [selectedTags, setSelectedTags] = useState([]);
  return (
    <>
      <main>
        <div className="background"></div>
        <FilterBar
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          removeTag={removeTag}
        />
        {/* <button onClick={() => console.log(selectedTags)}>log</button> */}
        <Offers addTag={addTag} selectedTags={selectedTags} />
      </main>
    </>
  );
  function addTag(tag) {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  }
  function removeTag(tag) {
    setSelectedTags(selectedTags.filter((item) => item !== tag));
  }
}

export default App;
