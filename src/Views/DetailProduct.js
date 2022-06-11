import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../services/productService'


export default function DetailProduct() {
    
    const [myproduct,setMyProduct]=useState(null)
    const {catId,prodId}=useParams()
    console.log({catId,prodId})

    useEffect(()=>{
        const obtProduct=async()=>{
            try {
                const prodObtenido=await getProduct(catId,prodId)                
                setMyProduct(prodObtenido)
            } catch (error) {
                throw error
            }
        }
        obtProduct()
    },[])


  return (
      <>
      {myproduct?(
        <div className='container'>
        
        <div className='row mt-5'>

        <div className='img-plato col-xl-2 col-sm-12'>

        </div>
            <div className='img-fluid col-xl-2  col-sm-12'>
            <img className='col-xl-5' src={myproduct.prod_image} alt={myproduct.prod_nom} style={{width:"400px"}}/>
            </div>
            <div className='img-plato col-xl-3 col-sm-12'>

            </div>
            
             <div className='col-xl-5 col-sm-12 mt-4'>
             <h2>{myproduct.prod_nom}</h2>        
            <i className="nom-plato fa-solid fa-utensils mt-4 icondesc"> Descripcion:</i>
            <p className='desc-plato mt-3'>
            {myproduct.prod_desc}
            </p>
            
            <i className="fa-solid fa-money-bill mt-4 iconprecio"> PRECIO:</i>
            
            <h2 className='precio-plato mt-3'>S/.{myproduct.prod_price}.00</h2>
            
            </div>                   
        
        </div>
    </div>
      ):(
          <p>Cargando..</p>
      )}
    </>
  );
}
