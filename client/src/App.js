import "./App.css";
import Menu from "./layouts/Menu";
import AddTask from "./components/AddTask";
import MasterTask from "./layouts/MasterTask";
import ShowMeetings from "./components/ShowMeetings";
function App() {
  return (
    <div className="App">
      <Menu />
      <ShowMeetings />
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
