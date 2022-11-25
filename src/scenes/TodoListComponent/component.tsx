import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { deleteTodo, getTodo, toggleTodo } from '../../redux/todos/actions';
import { decrement, increment } from '../../redux/todos/todosSlice';
import { useAppDispatch } from '../../redux/use-app-dispatch';
import { EditTodo } from './EditTodoComponent';
import './style.css';

export const TodoList = () => {
  const [incrementVal, setIncrementVal] = useState(0);
  const [decrementVal, setDecrementVal] = useState(0);
  const [toggleEdit, setToggleEdit] = useState(false);
  const dispatch = useAppDispatch();

  const {
    todos: { todosData, counter },
  } = useSelector((state: RootState) => state);

  return (
    <div>
      {toggleEdit ? <EditTodo setToggleEdit={setToggleEdit} /> : ''}
      <div style={{ marginTop: 15 }}>
        <button onClick={() => dispatch(increment(incrementVal))}>
          Increment
        </button>
        <br />
        <input
          type="number"
          value={incrementVal}
          onChange={(e) => setIncrementVal(e.target.valueAsNumber)}
        />
        <br />
        <div style={{ margin: 15 }}>
          <span>{counter}</span>
        </div>
        <br />
        <button onClick={() => dispatch(decrement(decrementVal))}>
          Decrement
        </button>
        <br />
        <input
          type="number"
          value={decrementVal}
          onChange={(e) => setDecrementVal(e.target.valueAsNumber)}
        />
      </div>
      <ul>
        {todosData &&
          todosData.map((todo, index) => {
            return (
              <div key={index}>
                <p>{todo.username}</p>
                <p className={todo.completed ? 'todo' : ''}>{todo.title}</p>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete
                </button>
                <button onClick={() => dispatch(toggleTodo(todo.id))}>
                  Toggle
                </button>
                <button
                  onClick={() => {
                    dispatch(getTodo(todo.id)).then(() => {
                      setToggleEdit(true);
                    });
                  }}
                >
                  Edit
                </button>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
