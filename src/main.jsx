import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './MainPage';
import Home from './maincomponents/Home';
import Login from './auth/Login';
import Registration from './auth/Registration';
import AllMovies from './Pages/AllMovies';
import Celebrity from './Pages/Celebrity';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './provider/PrivateRoute';
import AddMovies from './Pages/AddMovies';
import Details from './Pages/Details';
import Favorites from './Pages/Favorites';
import "./App.css"
import Error from './Error';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
         path: '/addmovies',
         element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>
      },
      {
        path: '/allmovies',
        element: <AllMovies></AllMovies>,
        loader: () => fetch('http://localhost:5000/allmovies')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/allmovies/${params.id}`)
      },
      {
        path: '/favorites',
        element: <PrivateRoute><Favorites></Favorites></PrivateRoute>
      },
      {
        path: '/celebrity',
        element: <Celebrity></Celebrity>
      },
      {
        path: '/auth/register',
        element: <Registration></Registration>
      },
      {
        path: '/auth/login',
        element: <Login></Login>
      }
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
