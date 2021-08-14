import Styles from './HeaderDetail.module.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import State from '../../../types/StateType';

import { useHistory } from 'react-router-dom';
import { FunctionComponent } from 'react';

interface PropsHeaderDetail {
  data: State;
}

const HeaderDetail: FunctionComponent<PropsHeaderDetail> = ({ data }) => {
  const history = useHistory();
  const handleBack = () => history.goBack();
  return (
    <div className={Styles.header}>
      <div className={Styles.shadow} />
      <div className={Styles.buttonBack} onClick={handleBack}>
        <ArrowBackIcon />
      </div>
      <div className={Styles.content}>
        <h1 className={Styles.title}>{!data.loading ? data.data.title : ''}</h1>
        <div className={Styles.subtitle}>
          {!data.loading ? data.data.release_date : ''}
        </div>
      </div>
    </div>
  );
};

export default HeaderDetail;
