import Register from './components/Register'
import Home from "./components/Home"
import Login from './components/Login';
import Setting from './components/Setting';
import Single from './components/Single';
import Topbar from './components/Topbar';
import Write from './components/Write';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Sidebar from './components/Sidebar';


function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/register'>{ user ? <Home /> : <Register /> }</Route>
        <Route path='/login'>{ user ? <Home /> :<Login /> }</Route>
        <Route path='/write'>{ user ? <Write /> : <Register /> }</Route>
        <Route path='/setting'>{ user ? <Setting/> : <Register /> }</Route>
        <Route path='/post/:postId'>
          <Single />
          <Sidebar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;