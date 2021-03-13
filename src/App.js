import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import * as Components from './components';

//Constants
import { ROUTES } from './constants';

function App() {
  return (
    <BrowserRouter>
      <Components.NavBar />
      <Switch>
        <Route exact component={Components.Home} path={ROUTES.HOME} />
        <Route component={Components.About} path={ROUTES.ABOUT} />
        <Route component={Components.SinglePost} path={ROUTES.SINGLEPOST} />
        <Route component={Components.Post} path={ROUTES.POST} />
        <Route component={Components.Project} path={ROUTES.PROJECT} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
