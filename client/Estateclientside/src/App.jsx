import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Singlepage from "./routes/singlepage/singlepage";
import Profile from "./routes/Profile/Profile";
import NewPostPage from "./routes/newpost page/newpost"

import { Layout, RequireAuth } from "./routes/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./routes/register/Register";
import Login from "./routes/login/login";
import ProfileUpdatePage from "./routes/profileUpdate/profileUpdate";

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
        },
        {
          path: "/:id",
          element: < Singlepage/>,
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
