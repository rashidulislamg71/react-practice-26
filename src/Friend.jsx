import React from "react";

function Friend({ friend }) {
  return (
    <div>
      <div key={friend.id} style={{ border: "1px solid", padding: "20px" }}>
        {friend.name} <br />
        {friend.email} <br />
        {friend.phone}
      </div>
    </div>
  );
}

export default Friend;
