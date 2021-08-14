import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppRouter from './AppRouter';
import '../scss/global/index.scss';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
        <AppRouter />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
