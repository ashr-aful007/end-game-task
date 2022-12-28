import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";


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
                    
               }
          ]
     }
])


export default Routs