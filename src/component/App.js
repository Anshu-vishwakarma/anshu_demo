
// import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './component/Home';
import Main from './component/Main';
import CheckOut from './component/CheckOut';
import Error404 from './component/Error404';
function App() {
  return (
    <div className="App">
       
        <BrowserRouter>
        <Switch>
          <Route exact path="/project1" component={Home} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/Main" component={Main} />
          <Route path="//////"  component={Error404} />
        </Switch>
      </BrowserRouter>
     </div>
    
  );
}

export default App;
