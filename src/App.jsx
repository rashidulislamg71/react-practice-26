import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Friends from "./Friends";
import Posts from "./Posts";
// import Users from "./Users";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const fetchPostData = async ()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

function App() {
  const usersPromise = fetchData();
  const postsPromise = fetchPostData();
  return (
    <>
      <Batsman />
      {/* <Users /> */}

      <Suspense fallback ={<h3>Loading...</h3>}>
        <Friends usersPromise={usersPromise} />
        <Posts postsPromise = {postsPromise} />
      </Suspense>

      
    </>
  );
}

export default App;
