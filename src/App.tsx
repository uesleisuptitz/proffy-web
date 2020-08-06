import React from "react";
import "./assets/styles/global.css";
import { Landing, TeacherList, TeacherForm } from "./pages/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" exact component={TeacherList} />
        <Route path="/give-classes" exact component={TeacherForm} />
        <Route path="*" exact render={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </div>
  );
}

export default App;
