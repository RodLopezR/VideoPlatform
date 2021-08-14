import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Styles from './SearchForm.module.scss';
import { useIsMobile } from '../../../hooks/useIsMobile';

interface PropsSearchForm {
  onChange: (value: string) => void;
  lastValue: string;
}

const SearchForm: FunctionComponent<PropsSearchForm> = ({
  onChange,
  lastValue,
}) => {
  const isMobile = useIsMobile();
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (value.trim() === '') return;
    if (value === lastValue) return;
    onChange(value);
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      <TextField
        id="input-search"
        autoFocus
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      <Button id="btnSearch" variant="contained" color="primary" type="submit">
        <SearchIcon /> {isMobile ? '' : 'Buscar'}
      </Button>
    </form>
  );
};

export default SearchForm;
