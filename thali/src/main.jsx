import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
  
  
} from "react-router-dom";

import routes from "./routes"

const router = createBrowserRouter(routes)

ReactDOM.render(
 <Provider store={store}>
   < RouterProvider router={router} />
  </Provider>,
  document.getElementById('root')
)

