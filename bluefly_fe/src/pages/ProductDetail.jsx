import { Center, Divider } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function ProductDetail() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartproduct')) || [])
    const [product, setProduct] = useState({})
    const token = localStorage.getItem('token');
    const location = useLocation();
    const { productH } = location.state || {};
    const productId = productH._id;

    // console.log(product)

    const getAllProduct = async () => {
        try {
            const res = await fetch(`https://bluefly-be.onrender.com/product/${productId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                credentials: "include"

            })
            // console.log(res)
            if (res.ok) {
                const data = await res.json();
                // console.log("data", data);
                setProduct(data.productdetail);
            } else {
                console.error(res.status);
            }
        } catch (error) {
            console.log(`error`)
        }
    }

    useEffect(() => {
        getAllProduct();
    }, [])

    const addProduct = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem('cartproduct', JSON.stringify(updatedCart));
    };
    return (
        <>
            {
                product === '' ? (<div className="loader"></div>) : (
                    <div className='productdetail' key={product._id}>

                        <h1 className="product-title-detail">
                            <span>TITLE: </span>
                            {product.title}</h1>
                        <div className='productdetail-side'>

                            <img src={product.image} alt={product.title}
                                className="product-image" />

                            <div className="product-card-detail">
                                <p className="product-price-detail" style={{ textAlign: 'left' }}>
                                    <span>Price: </span>
                                    ${product.price}
                                </p><p>
                                    <span>Discount: </span>
                                    {product.discount}%</p>

                                <p className="product-price-detail">
                                    <span>Size: </span>
                                    {product.size && product.size.length > 0 ? (
                                        product.size[Math.floor(Math.random() *
                                            (product.size.length))]) : ('')
                                    }
                                </p><p>

                                    <span>Stock:</span>
                                    {product.stock}
                                </p>

                                <p className="product-price-detail">
                                    <span>gender: </span>
                                    {product.gender}</p>
                                <p className="product-price-detail">
                                    <span>Color:</span>
                                    {product.color && product.color.length > 0 ?
                                        (product.color[Math.floor(Math.random() *
                                            (product.color.length))]) : ("")}
                                </p><p>

                                    <span>Brand: </span>
                                    {product.brand_name && product.brand_name.length > 0 ?
                                        (product.brand_name[Math.floor(Math.random() *
                                            (product.brand_name.length))]) : ("")}
                                </p>



                                <p className="product-price-detail">
                                    <span>Material: </span>
                                    {product.material && product.material.length > 0 ?
                                        (product.material[Math.floor(Math.random() *
                                            (product.material.length))]) : ("")}
                                </p><p>

                                    <span>Wash: </span>
                                    {product.wash && product.wash.length > 0 ?
                                        (product.wash[Math.floor(Math.random() *
                                            (product.wash.length))]) : ("")}
                                </p>

                                <p className="product-price-detail">
                                    <span>Origin Country: </span>
                                    {product.origin_countery && product.origin_countery.length > 0 ?
                                        (product.origin_countery[Math.floor(Math.random() *
                                            (product.origin_countery.length))]) : ("")}
                                </p>
                            </div>



                            <div className="product-card-detail">

                                <p className="product-price-detail">
                                    <span>Category:</span>
                                    {product.category && product.category.length > 0 ? (
                                        product.category[Math.floor(Math.random() *
                                            (product.category.length))]) : ('')
                                    }
                                </p>
                                <p className="product-price-detail">
                                    <span>SubCat Accessories:</span>
                                    {product.subCategoryAccessories && product.subCategoryAccessories.length > 0 ?
                                        (product.subCategoryAccessories[Math.floor(Math.random() *
                                            (product.subCategoryAccessories.length))]) : ('')}
                                </p>
                                <p className="product-price-detail">
                                    <span>SubCat Cloth:</span>
                                    {product.subCategoryCloth && product.subCategoryCloth.length > 0 ?
                                        (product.subCategoryCloth[Math.floor(Math.random() *
                                            (product.subCategoryCloth.length))]) : ('')}
                                </p>
                                <p className="product-price-detail">
                                    <span>SubCat Designers: </span>
                                    {product.subCategoryDesigners && product.subCategoryDesigners.length > 0 ?
                                        (product.subCategoryDesigners[Math.floor(Math.random() *
                                            (product.subCategoryDesigners.length))]) : ("")}</p>
                                <p className="product-price-detail">
                                    <span>SubCat Handbag: </span>
                                    {product.subCategoryHandbag && product.subCategoryHandbag.length > 0 ?
                                        (product.subCategoryHandbag[Math.floor(Math.random() *
                                            (product.subCategoryHandbag.length))]) : ("")}
                                </p>
                                <p className="product-price-detail">
                                    <span>SubCat Jewelry Watch: </span>
                                    {product.subCategoryJewelryWatch && product.subCategoryJewelryWatch.length > 0 ?
                                        (product.subCategoryJewelryWatch[Math.floor(Math.random() *
                                            (product.subCategoryJewelryWatch.length))]) : ("")}
                                </p>
                                <p className="product-price-detail">
                                    <span>SubCat Shoes: </span>
                                    {product.subCategoryShoes && product.subCategoryShoes.length > 0 ?
                                        (product.subCategoryShoes[Math.floor(Math.random() *
                                            (product.subCategoryShoes.length))]) : ("")}
                                </p>
                                <p className="product-price-detail">
                                    <span>SubCat Sunglass:</span>
                                    {product.subCategorySunglass && product.subCategorySunglass.length > 0 ?
                                        (product.subCategorySunglass[Math.floor(Math.random() *
                                            (product.subCategorySunglass.length))]) : ("")}
                                </p>
                                <p className="product-price-detail">
                                    <span>Dress Type: </span>
                                    {product.dress_type && product.dress_type.length > 0 ?
                                        (product.dress_type[Math.floor(Math.random() *
                                            (product.dress_type.length))]) : ("")}
                                </p>
                                <p>

                                    <span>Neck Type </span>
                                    {product.neck_type && product.neck_type.length > 0 ?
                                        (product.neck_type[Math.floor(Math.random() *
                                            (product.neck_type.length))]) : ("")},
                                    <span>Sleeve Type: </span>
                                    {product.sleeve_type && product.sleeve_type.length > 0 ?
                                        (product.sleeve_type[Math.floor(Math.random() *
                                            (product.sleeve_type.length))]) : ("")}
                                </p>
                            </div>

                        </div>
                        <p className="product-price-detail">
                            <span>Description: </span>
                            {product.description}</p>

                        <button className="product-button"
                            onClick={() => addProduct(product)}
                        >Add to Cart</button>
                    </div>
                )}
        </>
    )
}

export default ProductDetail;