import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPath } from '../redux/navigation/actions';

export const PageOne = () => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveForward = (input: string) => {
    navigate(`${'/' + input}`);
    dispatch(addPath(input));
  };

  return (
    <div>
      <h1>Page One</h1>
      <input
        type="text"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <button onClick={() => moveForward(path)}>Next</button>
    </div>
  );
};
