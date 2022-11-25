import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import { editTodo } from '../../../redux/todos/actions';
import { TodoItem } from '../../../redux/todos/types';

type Props = {
  setToggleEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditTodo = ({ setToggleEdit }: Props) => {
  const { myTodo } = useSelector((state: RootState) => state.todos);

  const [todo, setTodo] = useState<TodoItem[]>(myTodo);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={todo ? todo[0].title : ''}
        onChange={(e) =>
          setTodo([
            { id: todo[0].id, userId: todo[0].userId, title: e.target.value },
          ])
        }
      />
      <button onClick={() => setToggleEdit(false)}>Cancel</button>
      <button
        onClick={() => {
          dispatch(editTodo(todo[0]));
          setToggleEdit(false);
        }}
      >
        Save
      </button>
    </div>
  );
};
