import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import LandingPage from "./Components/Ladningpage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import Login from "./Components/Login"; // Import your custom Login component
import { Children } from "react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <LandingPage />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <Navbar />
          <Shop />
          <Footer />
        </>
      ),
    },
    {
      path: "/catagory",
      element: (
        <>
          <Navbar />
          <Shop />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />  {/* Make sure this is your custom Login component */}
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router}>{Children}</RouterProvider>;
};

export default App;
