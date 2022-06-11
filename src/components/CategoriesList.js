import {useState,useEffect} from "react"
import { getCategories } from "../services/categoryService"
import ProductList from "./ProductList";

export default function CategoriesList() {
  const [myCategories,setMyCategories]=useState([]);
  const [page,setPage]=useState(1);  
  const [limit,setLimit]=useState(3)

  const obtCategories=async()=>{
      try {
          const catObtenidas=await getCategories(page,limit)
          setMyCategories([...myCategories,...catObtenidas])
          console.log(catObtenidas)    
      } catch (error) {
          console.log(error)
      }
  }

  // al hacer click en ver mas aumentará las categorias
  const handleViewMore=()=>{
    setPage(page+1)
  }

  useEffect(()=>{
    obtCategories()
  },[page])


  return  (
  <div>

    {/* {myCategories.map(({cat_nom},i)=>(
      <button className="btn btn-success btn-sm me-2 mb-3 mt-2" key={i}>
        {cat_nom}
      </button>
    ))}  */}
    <ProductList myCategories={myCategories}/>
    <button className="btn btn-sm btnviewmore" onClick={handleViewMore}>
      ver mas...
    </button>
    

  </div>)
  
}
