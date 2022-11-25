import { createSlice } from '@reduxjs/toolkit';
import {
  addTodo,
  deleteTodo,
  editTodo,
  getTodo,
  getTodos,
  getUsers,
  toggleTodo,
} from './actions';
import { TodosState } from './types';

export const initialState: TodosState = {
  loading: false,
  todosData: [],
  myTodo: [],
  counter: 0,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment: (state, action) => {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    },
    decrement: (state, action) => {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todosData = action.payload.slice(0, 5);
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.myTodo = state.todosData.filter((el) => el.id === action.payload);
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.todosData = state.todosData.map((todo) => {
          const foundUser = action.payload.find(
            (user: any) => user.id === todo.userId,
          );
          return {
            ...todo,
            username: foundUser ? foundUser.username : '',
          };
        });
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(toggleTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todosData = state.todosData.map((todo) => {
          if (action.payload === todo.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todosData = state.todosData.filter(
          (el) => el.id !== action.payload,
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todosData = [...state.todosData, action.payload];
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(editTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todosData = state.todosData.map((todo) => {
          if (state.myTodo[0].id === todo.id) {
            todo.title = action.payload.title;
          }
          return todo;
        });
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { increment, decrement } = todoSlice.actions;
export default todoSlice.reducer;
