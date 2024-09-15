import Navbar from "./component/Navbar";
import React, { useState } from "react";
import loaderSVG from "./Asset/Bean Eater@1x-1.0s-200px-200px.svg";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import FoodDetails from "./component/FoodDetails";
import { useEffect } from "react";
import AddToCart from "./component/AddToCart";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";


export const AllMenuContext = React.createContext()

function App() {
  const [loader, setLoader] = useState(false);

  const [cart,setCart] =useState([])

  const [meal, setMeal] = useState([]);

  

  

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, [])
  // console.log("Loading :",loader)

  return (
    <>
      {loader ? (
        <div className="h-screen">
            <AllMenuContext.Provider value={{ meal, setMeal ,cart,setCart}}>
          <BrowserRouter>
            <Navbar  />

              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/food/:mealId"
                  element={<FoodDetails />}
                />
                <Route path="/cart" element={<AddToCart />} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signUp" element={<SignUpPage/>}/>
              </Routes>
            <Footer />
          </BrowserRouter>
            </AllMenuContext.Provider>
        </div>
      ) : (
        <img className="w-full my-64  h-20" src={loaderSVG} alt="" />
      )}
    </>
  );
}

export default App;
