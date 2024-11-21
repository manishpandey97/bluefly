import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import EditProdoct from './EditProduct';

const UserProduct = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const location = useLocation()
    const { admin ,seller} = location.state || {};
    const { userId } = seller;

    // console.log('user', user);

    const [productData, setProductData] = useState([]);



    const getAllProduct = async () => {
        try {
            const res = await fetch(`http://localhost:10000/product/userproduct/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                credentials: "include"

            })
            if (res.ok) {
                const data = await res.json();
                // console.log("data", data);
                setProductData(data.Userproducts);
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


    const editProduct = (e, gender, category, subCategoryCloth, subCategoryShoes, subCategoryHandbag,
        subCategorySunglass, subCategoryDesigners, subCategoryJewelryWatch, subCategoryAccessories, title,
        brand_name, price, description, neck_type, dress_type, color, sleeve_type, material, wash, origin_countery,
        imgaes, discount, stock, size, rating, productId, userId) => {

        const product = {
            gender, category, subCategoryCloth, subCategoryShoes, subCategoryHandbag, subCategorySunglass,
            subCategoryDesigners, subCategoryJewelryWatch, subCategoryAccessories, title, brand_name, price, description,
            neck_type, dress_type, color, sleeve_type, material, wash, origin_countery, imgaes, discount, stock, size,
            rating, productId, userId
        };
        // console.log(product);
        navigate('/editproduct', { state: { product, seller ,admin} })
    }

    const deleteProduct = async (e, id) => {
        console.log(id)
        try {
            const res = await fetch(`https://bluefly-be.onrender.com/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                credentials: 'include'
            })
            console.log('hello');
            if (res.ok) {
                console.log('delete product successfully!');
                getAllProduct();
            } else {
                console.error(`delete product error:${error}`);
            }
        } catch (error) {
            // console.log(error)
        }
    }

    return (
        <>
        {
          productData.length === 0 ? (<div className="loader"></div>) : (
        <div className='register'>
            <div>

                <h1>LIST OF PRODUCT</h1>
                <h3 style={{ fontSize: '12px', color: 'red' }}>You are {admin ?("admin"):(seller.role)} *</h3>
                {
                    admin? (
                        <button onClick={() => navigate('/listuser',{state:{seller,admin}})}>USER LIST</button>) : (
                        <button onClick={() => navigate('/createproduct', { state: { seller,admin } })}>CREATE PRODUCT</button>)
                }

                <div className='product' >
                    {
                        productData.map((product) => {
                            return (
                                <div className="product-card" key={product._id}
                                    style={{ textAlign: 'left', padding: "2px 10px" }}>
                                    <img src={product.image} alt={product.title} className="product-image" />
                                    <h3 className="product-title">
                                        <span>Title: </span>
                                        {product.title}</h3>

                                    <p className="product-price">
                                        <span>gender: </span>
                                        {product.gender}</p>
                                    <p className="product-price">
                                        <span>Category:</span>
                                        {product.category}</p>
                                    <p className="product-price">
                                        <span>SubCat Accessories:</span>
                                        {product.subCategoryAccessories}</p>
                                    <p className="product-price">
                                        <span>SubCat Cloth:</span>
                                        {product.subCategoryCloth}</p>
                                    <p className="product-price">
                                        <span>SubCat Designers: </span>
                                        {product.subCategoryDesigners}</p>
                                    <p className="product-price">
                                        <span>SubCat Handbag: </span>
                                        {product.subCategoryHandbag}</p>
                                    <p className="product-price">
                                        <span>SubCat Jewelry Watch: </span>
                                        {product.subCategoryJewelryWatch}</p>
                                    <p className="product-price">
                                        <span>SubCat Shoes: </span>
                                        {product.subCategoryShoes}</p>
                                    <p className="product-price">
                                        <span>SubCat Sunglass:</span>
                                        {product.subCategorySunglass}</p>

                                    <p className="product-price">
                                        <span>Color:</span>
                                        {product.color},
                                        <span>Brand: </span>
                                        {product.brand_name}</p>

                                    <p className="product-price">
                                        <span>Dress Type: </span>
                                        {product.dress_type},
                                        <span>Neck Type </span>
                                        {product.neck_type},
                                        <span>Sleeve Type: </span>
                                        {product.sleeve_type}</p>

                                    <p className="product-price">
                                        <span>Material </span>
                                        {product.material},
                                        <span>Wash </span>
                                        {product.wash}</p>


                                    <p className="product-price">
                                        <span>Price: </span>
                                        ${product.price},
                                        <span>Discount: </span>
                                        {product.discount}%</p>

                                    <p className="product-price">
                                        <span>Size: </span>
                                        {product.size},
                                        <span>Stock:</span>
                                        {product.stock}</p>

                                    <p className="product-price">
                                        <span>Origin Countery: </span>
                                        {product.origin_countery}</p>

                                    <p className="product-price">
                                        <span>Description: </span>
                                        {product.description}</p>

                                    <p>< FaRegEdit className='icon'
                                        style={{ color: 'yellow', float: 'left', margin: '10px' }}
                                        onClick={(e) => editProduct(
                                            e,
                                            product.gender, product.category, product.subCategoryCloth, product.subCategoryShoes,
                                            product.subCategoryHandbag, product.subCategorySunglass, product.subCategoryDesigners,
                                            product.subCategoryJewelryWatch, product.subCategoryAccessories, product.title,
                                            product.brand_name, product.price, product.description, product.neck_type,
                                            product.dress_type, product.color, product.sleeve_type, product.material,
                                            product.wash, product.origin_countery, product.imgaes, product.discount, product.stock,
                                            product.size, product.rating, product._id
                                        )}
                                    />
                                        <MdOutlineDelete className='icon'
                                            style={{ color: 'red', float: 'right', margin: '10px' }}
                                            onClick={(e) => deleteProduct(e, product._id)} /></p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>)}
    </>

    )
}

export default UserProduct