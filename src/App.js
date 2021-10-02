import './styles/App.css';
import Home from './routes/home-page/Home';
import Login from './routes/login-page/Login';
import Messenger from './routes/messenger/Messenger';
import Profile from './routes/profile-page/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useStateValue } from './context/stateprovider/StateProvider';

function App() {
  const [{user}] = useStateValue();
  function cutEmail(user){
    if(typeof user === "string"){
        return [...user].splice(0, user.search("@")).join("");

    }
     return ""
  }
  let userName = cutEmail(user);
  console.log(userName)
  return (
    <Router>
      <div className="app">
        <Switch>
          {
            user ?
            <>
              <Route exact path="/" component={Home}/>
              <Route exact path="/messenger" component={Messenger}/>
              <Route exact path="/:username" component={Profile}/>
            </>
            : 
            <Login/>
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;