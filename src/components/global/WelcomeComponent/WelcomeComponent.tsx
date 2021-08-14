import { Grid } from '@material-ui/core';
import Styles from './WelcomeComponent.module.scss';

const WelcomeComponent = () => {
  return (
    <Grid item xs={12} className={Styles.container}>
      Ingresa un texto para buscar algo
    </Grid>
  );
};

export default WelcomeComponent;
