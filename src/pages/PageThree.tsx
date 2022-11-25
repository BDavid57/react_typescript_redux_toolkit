import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../redux';
import { addPath, deletePath } from '../redux/navigation/actions';

export const PageThree = () => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    navigation: { pathing },
  } = useSelector((state: AppState) => state);

  const moveForward = (input: string) => {
    navigate(`${'/' + input}`);
    dispatch(addPath(input));
  };

  const moveBack = () => {
    navigate(`${'/' + pathing[pathing.length - 2]}`);
    dispatch(deletePath(pathing[pathing.length - 1]));
  };

  return (
    <div>
      <h1>Page Three</h1>
      <input
        type="text"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <button onClick={() => moveForward(path)}>Next</button>
      <button onClick={() => moveBack()}>Go Back</button>
    </div>
  );
};
