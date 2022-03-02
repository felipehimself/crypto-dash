import { configureStore } from '@reduxjs/toolkit';

// import do reducer do createApi
import { coinApi } from '../services/coinApi';

// import do reducer dos estados
import arrToChunksSlice from '../features/dadosSlice';

const store = configureStore({
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
    arrToChunks: arrToChunksSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinApi.middleware),
});

export default store;
