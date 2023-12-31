import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import routes
import Root from './routes/Root';
import Home from './routes/Home'
import AllSpots from './routes/AllSpots';
import OneSpot from './routes/OneSpot';
import CreateSpot from './routes/CreateSpot';
import CreateVisit from './routes/CreateVisit';
import OneVisit from './routes/OneVisit';
import Login from './routes/Login';
import Profile from './routes/Profile';

//setup browser router, root to home page
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/spots/:id",
        element: <OneSpot />
      },
      {
        path: "/spots",
        element: <AllSpots />
      },
      {
        path: "/spots/new",
        element: <CreateSpot />
      },
      {
        path: '/spots/:id/visits/new',
        element: <CreateVisit />
      },
      {
        path: '/visits/:id',
        element: <OneVisit />
      },
      {
        path:'/login',
        element: <Login />
      },

      {
        path:'/users/:id',
        element: <Profile />
      }

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
