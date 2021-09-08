import React from "react";
import emojipedia from "../emojipedia";
function card(pro) {
  return (
    <div>
      <div className="term">
        <dt>
          <p>{pro.id}</p>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {pro.emoji}
          </span>
          <span>{pro.name}</span>
        </dt>
        <dd>{pro.meaning}</dd>
      </div>
    </div>
  );
}
export default card;
