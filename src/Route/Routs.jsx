import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import ShowDetails from "../pages/ShowDetails/ShowDetails";
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
                    path:'/showDetails/:id',
                    loader: ({params}) => fetch(`http://localhost:5000/postdetails/${params.id}`),
                    element:<ShowDetails></ShowDetails>
               },
               {
                    path: '/about',
                    element:<About></About>
               }
          ]
     }
])


export default Routs