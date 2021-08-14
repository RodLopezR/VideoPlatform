import { Grid } from '@material-ui/core';
import Styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer
      className={Styles.footer}
      style={{ backgroundImage: `url(./footer.webp)` }}
    >
      <Grid container className={Styles.content}>
        <Grid item xs={12} lg={1}>
          Nusflix.com
        </Grid>
        <Grid item xs={12} lg={11}>
          <div>Proyecto desarrollado con ReactJS, SASS, TypeScript.</div>
          <div>Desarrollado por Rodrigo López</div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
