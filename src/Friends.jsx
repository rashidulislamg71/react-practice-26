import React, { use } from "react";
import Friend from "./Friend";

function Friends({ usersPromise }) {
  const friends = use(usersPromise);
  
  return (
    <>
      {friends.map((friend) => (
        <ul key={friend.id}>
          <Friend friend={friend} />
        </ul>
      ))}
    </>
  );
}

export default Friends;
