import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Friends from "./Friends";
// import Users from "./Users";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const usersPromise = fetchData();
  return (
    <>
      <Batsman />
      {/* <Users /> */}

      <Suspense fallback ={<h3>Loading...</h3>}>
        <Friends usersPromise={usersPromise} />
      </Suspense>
    </>
  );
}

export default App;
