import { BOOK_SELECTED } from 'Constants/book-types';

export default {
  [BOOK_SELECTED]: (state, action) => {
     return action.payload;
  } 
} 