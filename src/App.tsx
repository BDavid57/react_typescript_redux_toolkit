import './App.css';
import { TodoList } from './scenes/TodoListComponent';
import { useEffect } from 'react';
import { AddTodo } from './scenes/AddTodoComponent';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { PageLast } from './pages/PageLast';
import { PageThree } from './pages/PageThree';
import { addPath } from './redux/navigation/actions';
import { getTodos, getUsers } from './redux/todos/actions';
import { useAppDispatch } from './redux/use-app-dispatch';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodos());
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    navigate('/pageone');
    dispatch(addPath('pageone'));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagelast" element={<PageLast />} />
        <Route path="/pagethree" element={<PageThree />} />
      </Routes>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
