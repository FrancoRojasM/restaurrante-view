import {Link} from "react-router-dom"
export default function ProductList({myCategories}) {

    const catFiltradas=myCategories.filter((cat)=>cat.productos.length>0)
    const arrProducts=catFiltradas.map((item)=>item.productos).flat()
  
    return (
      
    <div className="row mt-4">
      {arrProducts.map(({prod_nom,prod_desc,prod_image,prod_price,categoriaId,prod_id},i)=>(
       <div className="col-12 col-md-6 col-lg-3">
          <div className="card mb-4" style={{maxWidth:"400px"}} key={i}>
          <img 
          src={prod_image}
          className="card-img-top img-fluid"
          alt={prod_nom}    
          />
          <div className="card-body">
            <h5 className="card-title cardnom">{prod_nom}</h5>
            <p className="card-text carddesc">{prod_desc}</p>
            <Link className="btn btnplato" to={`/detalleproducto/${categoriaId}/${prod_id}`}>
              Ver el plato
            </Link>
            {/* <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <p class="btn btn-primary">Precio: S/.{prod_price}.00</p>
            </li>
            </ul> */}
          </div>
        </div>
       </div>
      ))}
      </div>
      
    
  )
}