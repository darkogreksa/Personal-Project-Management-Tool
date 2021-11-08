import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProject from "./components/project/AddProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Dashboard />
        <Routes>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
