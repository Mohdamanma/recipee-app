import React from "react";

function Pagination(props) {
  const numberOfPage = [];
  for (let i = 1; i <=Math.ceil(props.filteredDishes.length/props.itemsPerPage); i++) {
    numberOfPage.push(i);
  }

  // Next Page handler

  function nextNumberHandler(event){
    console.log(event)
  }

 const page =  numberOfPage.map((pageNumber) =>{
  return <li id={pageNumber} onClick={nextNumberHandler} className="border-black border-2 px-2 hover:bg-yellow-300">{pageNumber}</li>
  })
  


  return (
    <section>
      <ul className="flex gap-2 justify-center ">
        {page}
      </ul>
    </section>
  );
}

export default Pagination;
