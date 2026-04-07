import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const eventSlice = createSlice({
  name: 'events',
  initialState: {
    list: [] as any[],
    loading: false,
    error: null as any,
  },
  reducers: {
    setEvents: (state, action) => {
      state.list = action.payload;
    },
  },
  selectors:{
    selectEvents: (state) => state.list,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  }
});

export const { selectEvents, selectLoading, selectError } = eventSlice.selectors;
export const { setEvents } = eventSlice.actions;
export default eventSlice.reducer;