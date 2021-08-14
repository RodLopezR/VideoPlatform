import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRoutes from '../constants/AppRoutes';
import AppRouter from './AppRouter';
import '../scss/global/index.scss';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter basename={AppRoutes.Home}>
        <AppRouter />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
