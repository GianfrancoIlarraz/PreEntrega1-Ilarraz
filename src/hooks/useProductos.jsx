import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from "react-router-dom"

const useProductos = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState([true])

    const { categoryId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setLoading(false); 
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos(res.filter(prod => prod.Categoria === categoryId))
                }
            })
            .catch((err) => { console.log(err) })
    }, [categoryId])

    return { productos, loading }
}

export default useProductos