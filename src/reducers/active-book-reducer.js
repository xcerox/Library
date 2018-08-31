import { createReducer } from 'Utils/create-reducer';
import { BOOK_SELECTED } from 'Constants/book-types';

const book_handler = {
  [BOOK_SELECTED]: (state, action) => {
     return action.payload;
  } 
}

export default createReducer(null, book_handler);