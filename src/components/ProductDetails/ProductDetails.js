import { useParams } from "react-router-dom"
import "./ProductDetails.css"
import { useEffect, useState } from "react"

const ProductDetails = () => {
    const apiProduct = "https://fakestoreapi.com/products/1"
    const parems = useParams([])
    const [product, setProdcut] = useState({})
    useEffect(() => {
        fetch(`${apiProduct}${parems.productId}`).then((res) => res.json()).then((data) => setProdcut(data))
    }, [])
    return (
        <div className="product-details">
            <img src={product.image} />
            <h4>category :  {product.category}</h4>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>Price : {product.price}$</h3>
        </div>
    )
}

export default ProductDetails
