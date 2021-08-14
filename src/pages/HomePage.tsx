import { Fragment, useState } from 'react';
import Footer from '../components/global/Footer';
import Header from '../components/global/Header';
import MovieListLoader from '../components/Home/MovieListLoader';

const HomePage = () => {
  const [querySearch, setQuerySearch] = useState('');
  return (
    <Fragment>
      <Header lastValue={querySearch} onChange={setQuerySearch} />
      <MovieListLoader querySearch={querySearch} />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
