import "./App.css";
import Menu from './layouts/Menu'
import AddTask from "./components/AddTask";
import MasterTask from "./layouts/MasterTask";
function App() {
 
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <div className="row">
          <MasterTask />
        </div>
      </div>
      <AddTask />
    </div>
  );
}

export default App;
