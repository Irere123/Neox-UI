import React from "react";

function AcceptButton() {
  return (
    <div onClick={() => console.log("Accepted")}>
      <button>Accept</button>
    </div>
  );
}

export default AcceptButton;
