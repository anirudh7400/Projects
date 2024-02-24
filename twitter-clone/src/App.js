import './App.css';
import Firstpage from './Components/Firstpage/Firstpage'
import Signup from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Firstpage />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <h2>404 error</h2>
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <h2>404 error</h2>
  }
])

function App() {

  return (
    <div className="app">
      
     <RouterProvider router={router} />

    </div>
  );
}

export default App;