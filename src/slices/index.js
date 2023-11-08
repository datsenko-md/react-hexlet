import { configureStore } from '@redux/toolkit';
import counterReducer from '../slices/counterSlice.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
