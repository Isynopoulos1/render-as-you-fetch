import "./App.css";
import { Suspense } from "react";
import { fetchData } from "./fetchData";

const apiData = fetchData("http://jsonplaceholder.typicode.com/users");

function App() {
  const data = apiData.read();

  return (
    <div className="App">
      <h1>Render as you fetch React </h1>
      <Suspense fallback={<div>Loading...</div>} />
      <ul className="card">
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
