import { Switch, Route, Redirect } from 'react-router-dom';
import AppRoutes from '../constants/AppRoutes';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';

const AppRouter = () => (
  <Switch>
    <Route path={AppRoutes.Home} exact>
      <HomePage />
    </Route>
    <Route path={AppRoutes.Detail} exact>
      <MoviePage />
    </Route>
    <Redirect to={AppRoutes.Home} />
  </Switch>
);

export default AppRouter;
