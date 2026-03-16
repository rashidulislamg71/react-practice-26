import React, { useEffect, useState } from "react";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const resData = await fetchData();
      setUser(resData);
    };

    loadData();
  }, []);

  return (
    <div>
      {user.map((data) => (
        <ul key={data.id}>
          <li>{data.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default Users;
