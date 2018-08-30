import { createReducer } from 'Utils/create-reducer';
import { book_handler } from './handlers/books';

export const ActiveBook = createReducer([], book_handler);

