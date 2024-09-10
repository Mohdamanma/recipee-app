import Navbar from "./component/Navbar";
import { useState } from "react";
import loaderSVG from "./Asset/Bean Eater@1x-1.0s-200px-200px.svg";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./login/MainPage";
import FoodDetails from "./component/FoodDetails";
import { useEffect } from "react";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
        setLoader(true);
      },3000);
  },[])
  // console.log("Loading :",loader)

  return (
    <>
      {loader ? (
        <div className="">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/food/:mealId"
                element={<FoodDetails/>}
              />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      ) : (
        <img className="w-full my-64  h-20" src={loaderSVG} alt="" />
      )}
    </>
  );
}

export default App;
