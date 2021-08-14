import SearchForm from '../../Home/SearchForm';
import Styles from './Header.module.scss';

interface PropsSearchForm {
  onChange: (value: string) => void;
  lastValue: string;
}

const Header = (props: PropsSearchForm) => {
  return (
    <div
      className={Styles.header}
      style={{ backgroundImage: `url(./background.png)` }}
    >
      <div className={Styles.shadow} />
      <div>
        <h1 className={Styles.title}>Nusflix</h1>
        <div className={Styles.subtitle}>El mejor catálogo de peliculas.</div>
      </div>
      <SearchForm {...props} />
    </div>
  );
};

export default Header;
