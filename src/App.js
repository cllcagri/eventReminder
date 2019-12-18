import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetail from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

const divStyle = {
    backgroundColor: '#E0FFFF',
    height: '1050px'
};

function App() {
  return (
      <BrowserRouter>
        <div className="App" style={divStyle}>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/project/:id" component={ProjectDetail} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/createProject" component={CreateProject}/>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
