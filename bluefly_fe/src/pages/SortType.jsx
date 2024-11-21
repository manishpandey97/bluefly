import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PaginationComponent from '../components/PaginationComponent';

function SortType() {
    const token = localStorage.getItem('token')
    const heading = JSON.parse(localStorage.getItem('heading'))
    const [productData, setProductData] = useState([]);
    const [expandedBrands, setExpandedBrands] = useState({});
    const [expandedCategory, setExpandedCategory] = useState({});
    const [expandedSubCategory, setExpandedSubCategory] = useState({});
    const [expandedColor, setExpandedColor] = useState({});
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [color, setColor] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [sort, setSort] = useState('price');
    const [order, setOrder] = useState('desc');
    const [category, setCategory] = useState('Clothing');
    const [brandName, setBrandName] = useState('Valentino');
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(500);
    const [totalPage, setTotalPage] = useState(0);
    const navigate = useNavigate()
    // console.log(productData)
    

    const getAllProduct = async (page, limit, sort, order, category, brandName, minPrice, maxPrice) => {
        try {
            const res = await fetch(`https://bluefly-be.onrender.com/product?page=${page}&
                limit=10&sort=${sort}&order=${order}&category=${category}&
                brand_name=${brandName}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
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
                setProductData(data.products);
                setTotalPage(data.totalPages);
            } else {
                console.error(res.status);
            }
        } catch (error) {
            console.log(`error`)
        }
    }

    const handlePageClick = (page) => {
        if (page !== '') {
            setPage(page);
        }
    }

    const sortOrderFunc = (e) => {
        if (e.target.value !== '') {
            setOrder(e.target.value.split(" ")[0]);
            setSort(e.target.value.split(" ")[1]);
        }
    }

    const toggleBrand = (brand) => {
         
        if (brand !== '') {
            setExpandedBrands((prevState) => ({
                ...prevState,
                [brand]: !prevState[brand],
            }));
            setBrandName(brand);
        }
    };


    const toggleCategory = (brand) => {
         
        if (brand !== '') {
            setExpandedCategory((prevState) => ({
                ...prevState,
                [brand]: !prevState[brand],
            }));
            setCategory(brand);
           
        }
    };

    const toggleSubCategory = (brand) => {
         
        if (brand !== '') {
            setExpandedSubCategory((prevState) => ({
                ...prevState,
                [brand]: !prevState[brand],
            }));
            setSubcategory(brand);
           
        }
    };

    const toggleColor = (brand) => {
         
        if (brand !== '') {
            setExpandedColor((prevState) => ({
                ...prevState,
                [brand]: !prevState[brand],
            }));
            setColor(brand);
           
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    useEffect(() => {
        getAllProduct(page, limit, sort, order, category, brandName, minPrice, maxPrice);
    }, [page, limit, sort, order, category, brandName, minPrice, maxPrice])






    const brands = ['Gucci', 'Valentino', 'Christian Louboutin', 'Saint Laurent', 'Balenciaga', 'Ferragamo',
        'Valentino By Mario Valentino', 'Bulgari'];

    const categories = ["CLOTHING", "SHOES", "HANDBAGS", "SUNGLASSES", "DESIGNERS", "JEWELRY & WATCHES ", "ACCESSORIES"]
    const subCategories = ['DAY DRESSES', 'SUNGLASSES', 'SANDALS', 'PARTY DRESSES', 'NECKLACES', 'PUMPS HEELS', 'EARRINGS',
        'STRAIGHT PANTS'];
    const colors = ['Black', "White", "Blue", "Pink", "Brown", "Green", "Red"];
    const percentOff = ['80', '60', '40', '20', '10'];
    const price = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']
    return (
        <>
            {
                productData.length === 0 ? (<div className="loader"></div>) : (
                    <div className='sort'>
                        <h1>{heading}</h1>
                        <div className='sort-content'>
                            <div className='sort-left'>
                                <h1>FILTER BY</h1>

                                <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Brand {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                      </div>
                                    {isDropdownOpen && brands.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleBrand(brand)}>
                                            <input type="radio" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>


                                <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Category {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && categories.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedCategory[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleCategory (brand)}
                                        >
                                            <input type="radio" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>

                                <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Sub Category {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && subCategories.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedSubCategory[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleSubCategory(brand)}
                                        >
                                            <input type="radio" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>

                                <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Color{isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && colors.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleColor(brand)}
                                        >
                                            <input type="radio" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{brand}</label>
                                        </div>
                                    ))}
                                </div>

                                {/* <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Price{isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && price.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleBrand(brand)}
                                        >
                                            <input type="checkbox" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{`less than ${brand}`}</label>
                                        </div>
                                    ))}
                                </div> */}

                                {/* <div className="brand-container">
                                    <div className="brand-header" onClick={toggleDropdown}>
                                        Percent Off{isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </div>
                                    {isDropdownOpen && percentOff.map((brand) => (
                                        <div
                                            key={brand}
                                            className={`brand ${expandedBrands[brand] ? 'expanded' : ''}`}
                                            onClick={() => toggleBrand(brand)}
                                        >
                                            <input type="checkbox" id={brand} name="brand" value={brand} />
                                            <label htmlFor={brand}>{`More than ${brand}%`}</label>
                                        </div>
                                    ))}
                                </div> */}

                            </div>

                            <div className='sort-right'>
                                <p style={{float:'left',width:"fitContent"}} >  SORT BY:
                                    <select name="" id="" onChange={(e) => sortOrderFunc(e)}>
                                        <option value="">Sort</option>
                                        <option value="asc price">PRICE LOW TO HIGH</option>
                                        <option value="desc price">PRICE HIGH TO LOW</option>
                                        <option value="asc createdAt">DATE OLD TO NEW</option>
                                        <option value="desc createdAt">DATE NEW TO OLD</option>
                                        <option value="asc discount">DISCOUNT LOW TO HIGH</option>
                                        <option value="desc discount">DISCOUNT HIGH TO LOW</option>
                                    </select>
                                </p>


                                <div className='sort-right-product'>
                                    <div className='product'  >
                                        {
                                            productData?.map((productH) => {
                                                return (
                                                    <div className="product-card" key={productH._id}
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => navigate('/productdetail', { state: { productH } })}>
                                                        <img src={productH.image} alt={productH.title} className="product-image" />
                                                        <h3 className="product-title">{productH.title}</h3>
                                                        <p className="product-price">${productH.price}</p>
                                                        <button className="product-button">Add to Cart</button>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>

                                <div className='pagination' >
                                    <PaginationComponent
                                        totalPages={totalPage}
                                        currentPage={page}
                                        onPageChange={handlePageClick}
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SortType