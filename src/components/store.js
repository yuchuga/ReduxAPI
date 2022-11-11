import { configureStore } from '@reduxjs/toolkit'; 
import { initialExpenses } from '../data/expenses';

//create store
export const store = configureStore({
  reducer: {
    expenses: initialExpenses,
  } 
})
console.log('Store', store.getState()) //returns current state (last value from store)