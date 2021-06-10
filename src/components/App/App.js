// import './App.css';
import { Route, Switch } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </>
  );
}

export default App;
