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

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/topics">
              {/* <Topics /> */}
            </Route>
            <Route path="/">
              {/* <Home /> */}
            </Route>
          </Switch>
          <CustomComponent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
