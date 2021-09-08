import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";
function createCard(emojipedia) {
  return (
    <div className="term">
      <Card
        id={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
      />
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
