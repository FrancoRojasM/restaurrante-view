import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeView from "./Views/HomeView"
import DetailProduct from "./Views/DetailProduct"
import Navigation from "./components/Navigation"
import "./Stylerest.css"
import Barra from "./components/Barra"


export default function App() {
  return (
    <>
    <Router>
    <Barra/>
      {/* <div className="container mt-4"> */}
      <Routes>
        <Route path="/" element={<Navigation/>}> </Route>
        
      <Route path="/menu" element={<HomeView/>}/>
      <Route path="/detalleproducto/:catId/:prodId" element={<DetailProduct/>}/>

      </Routes>      
      {/* </div> */}

    </Router>
</>
  )
}
