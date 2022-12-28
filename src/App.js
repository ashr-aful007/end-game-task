import { RouterProvider } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Routs from "./Route/Routs";


function App() {
  return (
    <div>
      <RouterProvider router={Routs}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
