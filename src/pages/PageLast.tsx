import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../redux';
import { deletePath } from '../redux/navigation/actions';

export const PageLast = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    navigation: { pathing },
  } = useSelector((state: AppState) => state);

  const moveBack = () => {
    navigate(`${'/' + pathing[pathing.length - 2]}`);
    dispatch(deletePath(pathing[pathing.length - 1]));
  };

  return (
    <div>
      <h1>Page Last</h1>
      <button onClick={() => moveBack()}>Go Back</button>
    </div>
  );
};
