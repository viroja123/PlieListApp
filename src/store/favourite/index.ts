import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as any[],

  reducers: {
    toggleFavorite: (state, action) => {
      const item = action.payload;

      const index = state.findIndex(
        i => (i.event_id || i.id) === (item.event_id || item.id)
      );

      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(item);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;