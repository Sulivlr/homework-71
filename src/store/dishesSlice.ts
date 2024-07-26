import {createSlice} from '@reduxjs/toolkit';
import {createDish, deleteDish, fetchDishes, removeDish} from './dishesThunks';
import {Dish} from '../types';

export interface DishesState {
  items: Dish[],
  isFetching: boolean;
  isCreating: boolean;
  deleteLoading: false | string;
}

export const initialState: DishesState = {
  items: [],
  isCreating: false,
  isFetching: false,
  deleteLoading: false,
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

    builder.addCase(removeDish.pending, (state,{meta: {arg: dishId}}) => {
      state.deleteLoading = dishId;
    }).addCase(removeDish.fulfilled, (state) => {
      state.deleteLoading = false;
    }).addCase(removeDish.rejected, (state) => {
      state.deleteLoading = false;
    });


  },
  selectors: {
    selectDishIsCreating: (state) => state.isCreating,
    selectDishes: (state) => state.items,
    selectDishesAreFetching: (state) => state.isFetching,
    selectDeleteDish: (state) => state.deleteLoading,
  }
});

export const dishesReducer = DishesSlice.reducer;
export const {
  selectDishIsCreating,
  selectDishes,
  selectDishesAreFetching,
  selectDeleteDish,
} = DishesSlice.selectors;
