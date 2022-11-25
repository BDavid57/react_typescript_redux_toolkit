import { useState } from 'react';
import { addTodo } from '../../redux/todos/actions';
import { useAppDispatch } from '../../redux/use-app-dispatch';

export const AddTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useAppDispatch();

  const idForObj = () => {
    return Math.floor(Math.random() * 10000000);
  };

  const addNewTodo = () => {
    if (todo === '') {
      return;
    }
    const todoInput = {
      userId: idForObj(),
      id: idForObj(),
      title: todo,
      completed: false,
    };
    dispatch(addTodo(todoInput));
    setTodo('');
  };
  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addNewTodo}>Add Todo</button>
    </div>
  );
};
