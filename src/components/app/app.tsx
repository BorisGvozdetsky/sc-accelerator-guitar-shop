import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import NotFound from '../not-found/not-found';
import PageMain from '../page-main/page-main';
import Product from '../product/product';

function App(): JSX.Element {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <PageMain/>
        </Route>
        <Route exact path={`${AppRoute.Product}/:id`}>
          <Product/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
