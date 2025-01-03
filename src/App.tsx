import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import MainPage from './pages/MainPage.tsx';
import Dashboard from './pages/Dashboard';
import MemberList from './pages/MemberList';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <MainPage/>,
    children:[
      {
        index:true,
        element:<Dashboard/>
      },
      {
        path:'member',
        element:<MemberList/>
      }
    ]
  },
]);

export default routers;
