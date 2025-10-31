import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
             {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>
            }
        ]
        
    },
    {
        path: "/auth",
        element: <h2>Authentication Layout</h2>
    },
    {
        path: "/news",
        element: <h2>News Layout</h2>
    },
     {
        path: "/*",
        element: <h2>Error404</h2>
    },


]);



export default router;




// export default <RouterProvider router={router} />,