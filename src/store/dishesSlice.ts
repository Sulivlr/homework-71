import {createSlice} from '@reduxjs/toolkit';
import {createDish, fetchDishes} from './dishesThunks';
import {Dish} from '../types';

export interface DishesState {
  items: Dish[],
  isFetching: boolean;
  isCreating: boolean;
}

export const initialState: DishesState = {
  items: [],
  isCreating: false,
  isFetching: false,
};


// Вот тут принял в дженерик стэйт потому что ругается, не знаю почему,
// то ли потому что у меня вебшторм хакнутый и не совпадает с версиями то-ли версия редакса другая.
// Type argument cannot be inferred from usage << вот это пишет.

export const DishesSlice = createSlice<DishesState>({
  name: 'dishes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createDish.pending, (state) => {
      state.isCreating = true;
    }).addCase(createDish.fulfilled, (state) => {
      state.isCreating = false;
    }).addCase(createDish.rejected, (state) => {
      state.isCreating = false;
    });

    builder.addCase(fetchDishes.pending, (state) => {
      state.isFetching = true;
    }).addCase(fetchDishes.fulfilled, (state, {payload: items}) => {
      state.isFetching = false;
      state.items = items;
    }).addCase(fetchDishes.rejected, (state) => {
      state.isFetching = false;
    });
  },
  selectors: {
    selectDishIsCreating: (state) => state.isCreating,
    selectDishes: (state) => state.items,
    selectDishesAreFetching: (state) => state.isFetching,
  }
});

export const dishesReducer = DishesSlice.reducer;
export const {selectDishIsCreating,
  selectDishes,
  selectDishesAreFetching,
} = DishesSlice.selectors;
