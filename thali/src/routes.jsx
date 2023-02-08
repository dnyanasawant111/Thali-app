import React from 'react'

import App from "./App";

import Header from "./Component/Header";

import Show from "./Component/Show";

import Thali from "./Component/Thali";

import Footer  from "./Component/Footer"

const routes = ([
  {
    path: "/",
    element: <App />

    ,
  },
  {
    path: "/header",
    element: <Header />
  },
  {
    path: "/show",
    element: <Show />
  },
  {
    path: '/thali',
    element: <Thali />

  },
  {
    path: '/footer',
    element: <Footer />

  },





]);

export default routes;
