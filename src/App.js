import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Authpg from "./pages/Authpg";
import { checkAuthLoader } from "./utils";

const App = () => {
  const router = createBrowserRouter([
    { path: "/",  
     element: <Authpg/> ,
  },
    {path: "/home", element: <Home/>, loader:checkAuthLoader}]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/home" element={<Home/>}/>
    //       <Route path="/" element={<Authpg/>}/>
    //     </Routes>
    //  </BrowserRouter>
  );
};

export default App;

