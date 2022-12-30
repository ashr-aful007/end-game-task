import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import AddPost from "../pages/AddPost/AddPost";
import Home from "../pages/Home/Home";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const Routs = createBrowserRouter([
     {
          path:'/',
          element:<Main></Main>,
          children:[
               {
                    path:'/',
                    element:<Home></Home>
               },
               {
                   path:'/signup',
                   element:<SignUp></SignUp>  
               },
               {
                    path: '/signIn',
                    element:<SignIn></SignIn>
               },
               {
                    path:'/showDetails/:id',
                    element:<PrivateRoute><ShowDetails></ShowDetails></PrivateRoute>
               },
               {
                    path: '/about',
                    element:<About></About>
               },
               {
                    path: '/addpost',
                    element: <PrivateRoute><AddPost></AddPost></PrivateRoute>
               },
          ]
     }
])


export default Routs