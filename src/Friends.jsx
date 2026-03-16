import React, { use } from "react";

function Friends({ usersPromise }) {
  const friends = use(usersPromise);
  console.log(friends);

  return (
    <>
      {friends.map((data) => (
        <ul key={data.id}>
          <li>{data.email}</li>
        </ul>
      ))}
    </>
  );
}

export default Friends;
