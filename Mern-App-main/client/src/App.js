import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contacts from "./Components/Contacts/Contacts";
// import Login from "./Components/Auth/Login";
// import Register from "./Components/Auth/Register";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
      </Switch> */}

      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
