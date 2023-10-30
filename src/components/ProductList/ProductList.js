import "./ProductList.css"
import Card from "../Card/Card"
import { useEffect } from "react"
import { useState } from "react"





const ProductList = () => {
    const apiUrl = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])
    const [categorys, setCategorys] = useState([])

    const getProducts = () => {
        fetch(apiUrl).then((res) => res.json().then((data) => setProducts(data)))
    }
    const getCategorys = () => {
        fetch(`${apiUrl}/categories`).then((res) => res.json().then((data) => setCategorys(data)))
    }

    useEffect(() => {
        getProducts();
        getCategorys();
    }, [])

    const handleCategorysClick = (catName) => {
        fetch(`${apiUrl}/category/${catName}`)
            .then(res => res.json())
            .then((data) => setProducts(data))
    }
    const handleCategoryAll = () => {
        fetch(apiUrl).then((res) => res.json().then((data) => setProducts(data)))
    }

    const allProduct = products.map((data) => {
        return <Card key={data.id} id={data.id} img={data.image} price={data.price} description={data.description} />
    })
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Products Shop</h1>
            <div className="buttons-category">
                <button onClick={handleCategoryAll}>All</button>
                {categorys.map((category, index) => {
                    return <button onClick={() => {
                        handleCategorysClick(category)
                    }} key={index}>{category}</button>
                })}
            </div>
            <div className="product-list">
                {allProduct}
            </div>
        </>
    )
}

export default ProductList
