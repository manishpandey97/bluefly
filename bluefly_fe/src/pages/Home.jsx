import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

function Home({ heading, setHeading }) {
  const token = localStorage.getItem('token')
  const [getShop, setGetShop] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [recommendProduct, setRecommendProduct] = useState([]);
  const navigate = useNavigate()
  // console.log("getShop", getShop)
  // console.log("newArrival", newArrival)
  // console.log("recommendProduct", recommendProduct)

  const updateHeading = (textcontent) => {
    // console.log(textcontent)
    if (textcontent !== '') {
      setHeading(textcontent);
      localStorage.setItem('heading', JSON.stringify(heading));
      navigate('/sort');
    } else {
      navigate('/sort');
    }

  };

  const getShopby = async () => {
    try {
      const res =
        await fetch(`https://bluefly-be.onrender.com/product?page=1&limit=8&sort=&order=&category=&brand_name=&minPrice=&maxPrice=`, {
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
        setGetShop(data.products);
      } else {
        console.error(res.status);
      }
    } catch (error) {
      console.log(`error`)
    }
  }

  const newArrivals = async () => {
    try {
      const res =
        await fetch(`https://bluefly-be.onrender.com/product?page=1&limit=5&sort=createdAt&order=&category=&brand_name=&minPrice=&maxPrice=`, {
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
        setNewArrival(data.products);
      } else {
        console.error(res.status);
      }
    } catch (error) {
      console.log(`error`)
    }
  }

  const recommendProducts = async () => {
    try {
      const res =
        await fetch(`https://bluefly-be.onrender.com/product?page=1&limit=5&sort=&order=&category=&brand_name=&minPrice=&maxPrice=`, {
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
        setRecommendProduct(data.products);
      } else {
        console.error(res.status);
      }
    } catch (error) {
      console.log(`error`)
    }
  }

  useEffect(() => {
    getShopby();
    newArrivals();
    recommendProducts();
  }, [])

  return (

    <div className='homepage'>
      <div>
        <h1>SHOP BY</h1>
        <div className='product'  >
          {
            getShop.length === 0 ? (<div className="loader"></div>) : (
              getShop?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category[Math.floor(Math.random() * (productH.category.length))])}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                      // style={{ cursor: "pointer", width: '300px', height: '300px' }}
                    />
                    <h3 className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.category[Math.floor(Math.random() * (productH.category.length))]}</h3>
                    <p >Shop Now <FaLongArrowAltRight /> </p>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

      <div>
        <h1>NEW ARRIVALS</h1>
        <div className='product1' >
          {
            newArrival.length === 0 ? (<div className="loader"></div>) : (
              newArrival?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category[Math.floor(Math.random() * (productH.category.length))])}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                      // style={{ cursor: "pointer", width: '300px', height: '300px' }}
                    />
                    <h3 className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.category[Math.floor(Math.random() * (productH.category.length))]}</h3>
                    <p >Shop Now <FaLongArrowAltRight /> </p>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

      <div>
        <h2>RECOMMENDED PRODUCT</h2>
        <div className='product2'  >
          {
            recommendProduct.length === 0 ? (<div className="loader"></div>) : (
              recommendProduct?.map((productH) => {
                return (
                  <div className="product-card" key={productH._id}
                    onClick={(e) =>
                      updateHeading(productH.category[Math.floor(Math.random() * (productH.category.length))])}
                  >
                    <img src={productH.images} alt={productH.title}
                      className="product-image"
                      // style={{ cursor: "pointer", width: '300px', height: '300px' }}
                    />
                    <h3 className="product-title" style={{ textTransform: 'uppercase', fontWeight: '500' }}>
                      {productH.category[Math.floor(Math.random() * (productH.category.length))]}</h3>
                    <p >Shop Now <FaLongArrowAltRight /> </p>
                  </div>
                )
              })
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Home