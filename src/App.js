import logo from './logo.svg';
import './App.css';
import { CustomComponent } from './components/CustomComponents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import LaunchesList from './components/LuchesList';
import Launches from './pages/Launches';

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/:id/launch-details">
              {/* <La */}
            </Route>
            <Route path="/">
              <Launches/>
              {/* <Home /> */}
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
