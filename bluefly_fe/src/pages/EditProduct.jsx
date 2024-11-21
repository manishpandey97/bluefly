import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function EditProduct() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();
  const { product,seller,admin } = location.state || {};

  const { gender, category, subCategoryCloth, subCategoryShoes, subCategoryHandbag,
    subCategorySunglass, subCategoryDesigners, subCategoryJewelryWatch, subCategoryAccessories, title,
    brand_name, price, description, neck_type, dress_type, color, sleeve_type, material, wash, origin_countery,
    imgaes, discount, stock, size, rating, productId } = product;

  const [formData, setFormData] = useState({
    gender, category, subCategoryCloth, subCategoryShoes, subCategoryHandbag,
    subCategorySunglass, subCategoryDesigners, subCategoryJewelryWatch, subCategoryAccessories, title,
    brand_name, price, description, neck_type, dress_type, color, sleeve_type, material, wash, origin_countery,
    imgaes, discount, stock, size, rating, productId
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, images: fileArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://bluefly-be.onrender.com/product/update/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        console.log('product updateded sucessfully');
        navigate('/userproduct',{state:{seller,admin}});
      } else {
        console.error('Failed to register', res.status);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    
    <div className='register'>
      <h1>EdIT PRODUCT</h1>
      
      <h3 style={{ fontSize: '12px', color: 'burlywood' }}>EDIT ANY CATEGORY & THIER'S SUBATEGORY *</h3>
      <h3 style={{ fontSize: '12px', color: 'red' }}>You are {seller.role} *</h3>
      <form onSubmit={(e) => handleSubmit(e)}>

        <select name="gender"
          value={formData.gender} onChange={handleChange}
        >
          <option value="demo">For ?.</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
        <br />

        <select name="category" className='category'
          value={formData.category} onChange={handleChange}
        >
          <option value="demo">Category</option>
          <option value="Clothing">Clothing</option>
        </select>

        <select name="subCategoryCloth" className='subcategory'
          value={formData.subCategoryCloth} onChange={handleChange}
        >
          <option value="demo">SubCategory</option>
          <option value="Activewear">Activewear</option>
          <option value='Coats & Jackets'>Coats & Jackets</option>
          <option value='Dresses'> Dresses</option>
          <option value='Jeans & Denim'> Jeans & Denim</option>
          <option value='Jumpsuits & Rompers'> Jumpsuits & Rompers</option>
          <option value='Lingerie & Hosiery'>Lingerie & Hosiery </option>
          <option value='Loungewear & Sleepwear'> Loungewear & Sleepwear</option>
          <option value='Pants & Leggings'> Pants & Leggings</option>
          <option value='Shorts'> Shorts</option>
          <option value='Skirts'> Skirts</option>
          <option value='Sweaters'> Sweaters</option>
          <option value='Sweatshirts & Hoodies'>Sweatshirts & Hoodies </option>
          <option value='Swimwear & Coverups'>Swimwear & Coverups </option>
          <option value='Tops & Tees'>Tops & Tees </option>
          <option value='Casual Button-Down Shirts'> Casual Button-Down Shirts</option>
          <option value='Dress Shirts'> Dress Shirts</option>
          <option value='Pants'>Pants </option>
          <option value='Polo Shirts'>Polo Shirts </option>
          <option value='Sport Coats & Blazers'> Sport Coats & Blazers</option>
          <option value='Suits & Separates'>Suits & Separates </option>
          <option value='Swimwear'> Swimwear</option>
          <option value='T-Shirts'>T-Shirts </option>
        </select >
        <br />

        <select name="category" className='category'
          value={formData.category} onChange={handleChange}
        >
          <option value="demo">Category</option>
          <option value="Shoes">Shoes</option>
        </select>

        <select name="subCategoryShoes" className='subcategory'
          value={formData.subCategoryShoes} onChange={handleChange}
        >
          <option value="demo">SubCategory</option>
          <option value="Boots">Boots</option>
          <option value="Espadrilles">Espadrilles</option>
          <option value="Flats">Flats</option>
          <option value="Mules & Slides">Mules & Slides</option>
          <option value="Oxfords & Loafers">Oxfords & Loafers</option>
          <option value="Pumps & Heels">Pumps & Heels</option>
          <option value="Sandals">Sandals</option>
          <option value="Slippers">Slippers</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Wedges">Wedges</option>
          <option value="Alexander McQueen">Alexander McQueen</option>
          <option value='Balenciaga'>Balenciaga</option>
          <option value='Bottega Veneta'>Bottega Veneta</option>
          <option value='Christian Louboutin'>Christian Louboutin</option>
          <option value='Dolce & Gabbana'>Dolce & Gabbana</option>
          <option value='Fendi'>Fendi</option>
          <option value='Gianvito Rossi'>Gianvito Rossi</option>
          <option value='Gucci'>Gucci</option>
          <option value='Jimmy Choo'>Jimmy Choo</option>
          <option value='Manolo Blahnik'>Manolo Blahnik</option>
          <option value='Saint Laurent'>Saint Laurent</option>
          <option value='Stuart Weitzman'>Stuart Weitzman</option>
          <option value='Salvatore Ferragamo'>Salvatore Ferragamo</option>
          <option value='Valentino'>Valentino</option>
          <option value='VEJA'>VEJA</option>
          <option value='Drivers'>Drivers</option>
          <option value='Loafers & Slip'>Loafers & Slip</option>
          <option value='Oxford & Derby Shoes'>Oxford & Derby Shoes</option>
          <option value='Sandals & Flip Flops'>Sandals & Flip Flops</option>
          <option value='Burberry'>Burberry</option>
          <option value='Common Projects'>Common Projects</option>
          <option value='Giuseppe Zanotti'>Giuseppe Zanotti</option>
          <option value='Golden Goose'>Golden Goose</option>
          <option value='Off - White'>Off - White</option>
          <option value='Versace'>Versace</option>
        </select>
        <br />

        <select name="category" className='category'
          value={formData.category} onChange={handleChange}
        >
          <option value="demo">Category</option>
          <option value="Handbags">Handbags</option>
        </select>


        <select name="subCategoryHandbag" className='subcategory'
          value={formData.subCategoryHandbag} onChange={handleChange}
        >
          <option value="demo">SubCategory</option>
          <option value="Celine">Celine</option>
          <option value="Chloe">Chloe</option>
          <option value="Givenchy">Givenchy</option>
          <option value="Mario Valentino">Mario Valentino</option>
          <option value="Prada">Prada</option>
          <option value="Stella McCartney">Stella McCartney</option>
          <option value="Bucket-bags">Bucket-bags</option>
          <option value="Clutches">Clutches</option>
          <option value="Crossbody Bags">Crossbody Bags</option>
          <option value="Hobo Bags">Hobo Bags</option>
          <option value="Satchels">Satchels</option>
          <option value="Shoulder Bags">Shoulder Bags</option>
          <option value="Tote Bags">Tote Bags</option>
          <option value="Travel Bags & Luggage">Travel Bags & Luggage</option>
          <option value="Women's Wallets & Cardholders">Women's Wallets & Cardholders</option>
        </select>
        <br />

        <select name="category" className='category'
          value={formData.category} onChange={handleChange}
        >
          <option value="demo">Category</option>
          <option value="Sunglasses">Sunglasses</option>
        </select>


        <select name="subCategorySunglass" className='subcategory'
          value={formData.subCategorySunglass} onChange={handleChange}
        >
          <option value="demo">SubCategory</option>
          <option value="Carrera">Carrera</option>
          <option value="Dior">Dior</option>
          <option value="Ermenegildo Zegna">Ermenegildo Zegna</option>
          <option value="Montblanc">Montblanc</option>
          <option value="Persol">Persol</option>
          <option value="Tom Ford">Tom Ford</option>
          <option value="Emilio Pucci">Emilio Pucci</option>
          <option value="Fendi">Fendi</option>
          <option value="Oliver Peoples">Oliver Peoples</option>
          <option value="Roberto Cavalli">Roberto Cavalli</option>
        </select>
        <br />


        <select name="category" className='category'
          value={formData.category} onChange={handleChange}
        >
          <option value="demo">Category</option>
          <option value="Designers">Designers</option>
        </select>


        <select name="subCategoryDesigners" className='subcategory'
          value={formData.subCategoryDesigners} onChange={handleChange}
        >
          <option value="demo">SubCategory</option>
          <option value="Moschino">Moschino</option>
          <option value="Off-White">Off-White</option>
          <option value="Palm Angels">Palm Angels</option>
          <option value="Tod'S">Tod'S</option>
          <option value="Vince">Vince</option>
        </select>
        <br />

        <select name="category" className='category'
          value={formData.category} onChange={handleChange}
        >
          <option value="demo">Category</option>
          <option value="Accessories">JewelryWatch</option>
        </select>


        <select name="subCategoryJewelryWatch" className='subcategory'
          value={formData.subCategoryJewelryWatch} onChange={handleChange}
        >
          <option value="demo">SubCategory</option>
          <option value="Michael Kors">Michael Kors</option>
          <option value="Red Line">Red Line</option>
          <option value="Bracelets">Bracelets</option>
          <option value="Brooches & Pins">Brooches & Pins</option>
          <option value="Earrings">Earrings</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Rings">Rings</option>
          <option value="Watches">Watches</option>
          <option value="Men's Jewelry">Men's Jewelry</option>
        </select>

        <br />
        <select name="category" className='category'
          value={formData.category} onChange={handleChange}
        >
          <option value="demo">Category</option>
          <option value="Accessories">Accessories</option>
        </select>


        <select name="subCategoryAccessories" className='subcategory'
          value={formData.subCategoryAccessories} onChange={handleChange}
        >
          <option value="demo">SubCategory</option>
          <option value="Belts">Belts</option>
          <option value="Hats">Hats</option>
          <option value="Optical & Reading Glasses">Optical & Reading Glasses</option>
          <option value="Scarves">Scarves</option>
          <option value="Bag Charms">Bag Charms,</option>
          <option value="Straps & Accessories">Straps & Accessories</option>
          <option value="Cosmetic Bags">Cosmetic Bags</option>
          <option value="Gloves">Gloves</option>
          <option value="Scarves & Wraps">Scarves & Wraps</option>
          <option value="Travel Bags">Travel Bags</option>
        </select>
        <br />



        <input type="text" name="title" placeholder="Product Name" required
          value={formData.title} onChange={handleChange}
        /> <br />

        <input type="text" name="brand_name" placeholder="Brand name" required
          value={formData.brand_name} onChange={handleChange}
        /> <br />

        <input type="text" name="neck_type" placeholder="Neck type"
          value={formData.neck_type} onChange={handleChange}
        /> <br />


        <input type="text" name="dress_type" placeholder="Dress type"
          value={formData.dress_type} onChange={handleChange}
        /> <br />


        <input type="text" name="color" placeholder="Color"
          value={formData.color} onChange={handleChange}
        /> <br />

        <input type="text" name="sleeve_type" placeholder="Sleeve type"
          value={formData.sleeve_type} onChange={handleChange}
        /> <br />

        <input type="text" name="material" placeholder="Material"
          value={formData.material} onChange={handleChange}
        /> <br />

        <input type="text" name="origin_countery" placeholder="Origin countery"
          value={formData.origin_countery} onChange={handleChange}
        /> <br />

        <input type="text" name="wash" placeholder="Wash"
          value={formData.wash} onChange={handleChange}
        /> <br />


        <input type="number" name="size" placeholder="size"
          value={formData.size} onChange={handleChange}
        /> <br />


        <input type="number" name="stock" placeholder="Stock"
          value={formData.stock} onChange={handleChange}
        /> <br />


        <input type="number" name="rating" placeholder="rating"
          value={formData.rating} onChange={handleChange}
        /> <br />


        <input type="number" name="discount" placeholder="Discount"
          value={formData.discount} onChange={handleChange}
        /> <br />

        <input type="number" name="price" placeholder="Price"
          value={formData.price} onChange={handleChange}
        /> <br />

        <input type="file" name="images" multiple onChange={handleImageUpload} />
        <br />
        <textarea placeholder="Description" name='description'
          value={formData.description} onChange={handleChange}
        /> <br />

        <input type="submit" value='UPATE' />
        <br />
        <p style={{ cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/userproduct', { state: { seller,admin } })}>PRODUCT LIST</p>
      </form>

    </div>
  )
}

export default EditProduct