import logo from './logo.svg';
import './App.css';
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
import LaunchDetails from './components/LaunchDetails/LaunchDetails';
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
            <LaunchDetails/>
            </Route>
            <Route path="/">
              <Launches/>
              
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
