import axios from "axios"

const URL=process.env.REACT_APP_API;

const getProduct=async(catId,prodId)=>{
    try {
        const endpoint=`${URL}/categorias/${catId}/productos/${prodId}`
        const {data,status} = await axios.get(endpoint)
        if (status===200) return data
        throw Error("Error al obtener data")
        
    } catch (error) {         
        throw error
    }
}

export{
    getProduct
}
