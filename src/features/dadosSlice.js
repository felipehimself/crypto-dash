import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: [], page: 0, cardInfo: {} };

const arrToChunksSlice = createSlice({
  name: 'arrToChunksSlice',
  initialState: initialState,
  reducers: {
    arrToChunks: (state, action) => {
      state.value = action.payload;
    },

    changePage: (state, action) =>{
      state.page = action.payload
    },
    cardsInfo: (state,action) =>{
      state.cardInfo = action.payload
    }
  },
});

// actions para os components
export const { arrToChunks, changePage, cardsInfo } = arrToChunksSlice.actions;

// reducer para a store
export default arrToChunksSlice.reducer;
