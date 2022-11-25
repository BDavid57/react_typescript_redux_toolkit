import axios from 'axios';
import { TodoItem } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const getTodo = createAsyncThunk(
  'todo/getTodo',
  async (data: number, thunkApi) => {
    try {
      return data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (data, thunkApi) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      return response.data;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const toggleTodo = createAsyncThunk(
  'todo/toggleTodo',
  async (todoId: number, thunkApi) => {
    try {
      return todoId;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (todoId: number, thunkApi) => {
    try {
      return todoId;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (todo: TodoItem, thunkApi) => {
    try {
      return todo;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);

export const editTodo = createAsyncThunk(
  'todo/editTodo',
  async (todo: TodoItem, thunkApi) => {
    try {
      return todo;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);
