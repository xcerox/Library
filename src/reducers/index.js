 import { combineReducers } from 'redux';
 import BooksReducer from 'Reducers/books-reducer';
 import ActiveBook from 'Reducers/active-book-reducer';

 const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
 });

 export default rootReducer;