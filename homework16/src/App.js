import "./App.css";
import Post from "./Post";
import { posts } from "./List";
function App() {
  return (
    <div className="App row">
      {posts.map((element, id) => {
        return <Post data={element} key={id} />;
      })}{" "}
    </div>
  );
}

export default App;
