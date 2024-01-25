import Posts from "./features/Posts/Posts";
import AddPostForm from "./features/Posts/AddPostForm";
import './App.css';



function App() {
  return (
    <div className="App">
      <AddPostForm/>
      <Posts/>
    </div>
  );
}

export default App;
