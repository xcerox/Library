import { createAction } from 'Utils/create-action';
import { BOOK_SELECTED } from 'Constants/book-types';

export default createAction(BOOK_SELECTED, 'payload');
