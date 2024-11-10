import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listpage/listpage";
import Singlepage from "./routes/singlepage/singlepage";
import Profile from "./routes/Profile/Profile";
import NewPostPage from "./routes/newpost page/newpost"

import { Layout, RequireAuth } from "./routes/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./routes/register/Register";
import Login from "./routes/login/login";
import ProfileUpdatePage from "./routes/profileUpdate/profileUpdate";
import {profilePageLoader, singlePageLoader} from "./lib/loaders"
import {listPageLoader}from "./lib/loaders"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader:listPageLoader
        },
        {
          path: "/:id",
          element: < Singlepage/>,
          loader:singlePageLoader 
        },
        
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"login",
          element:<Login/>

        }

      ],
    },
    {

      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path: "/profile",
          element: < Profile/>,
          loader:profilePageLoader
        },
        {
          path: "/profile/update",
          element: < ProfileUpdatePage/>,
        },
        {
          path: "add",
          element: <NewPostPage/>,
        }

      ]

    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
