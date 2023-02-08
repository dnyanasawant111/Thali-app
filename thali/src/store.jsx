import { configureStore } from '@reduxjs/toolkit'

 import thaliApp from './slice'

export const store = configureStore({
  reducer: {
    thali: thaliApp
  },
})