import React,{useState,useEffect} from 'react'


export const AllMenuContext = React.createContext()

export const  AllMenu = (props) =>{  
  
  const [meal, setMeal] = useState([])


    // console.log("all MENU Contest :",meal) 

  // Get all Menus
  const getAllMealData = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    try {
      let response = await fetch(API_URL);
      let data = await response.json();
      setMeal(data.meals);
      console.log("fetch data :", data.meals);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAllMealData();
  },[]);

 // Pass Multiple value
  const allMenu ={
    meal,
    setMeal
  }


  return(  
          <AllMenuContext.Provider value={allMenu}>
            {props.children}
          </AllMenuContext.Provider>

  )
}