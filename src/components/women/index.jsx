import React, { useState } from "react";
import "./women.scss";
import categoryApi from "../../categoryApi/categoryApi";
import { BsSearch } from 'react-icons/bs';

function Women() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(categoryApi[0].product); // Initial state set to all products

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter products based on search term
    const filtered = categoryApi[0].product.filter(product =>
      product.name && product.name.toUpperCase().includes(term.toUpperCase())
    );
    setFilteredProducts(filtered); // Update the state with filtered products
  };

  return (
    <div className="womens-main">
      <div className="container">
        <div className="women-search-main">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchTerm}
            onChange={handleSearch} // Updates searchTerm and filtered products
          />
          <BsSearch className="women-search-icon" />
        </div>
        <div className="women-card-main">
          {filteredProducts.map((item) => (
            <div className="shoes-card" key={item.id}>
              <div className="shoes-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="shoes-details">
                <h3 className="shoes-name">{item.name}</h3>
                <div className="price-sec">
                  <p className="shoes-price">{item.discounted_price}</p>
                  <del>{item.original_price}</del>
                  <span>{item.offer}</span>
                </div>
                <div className="shoes-size">
                  {item.size.map((size, index) => (
                    <p key={index}>{size}</p>
                  ))}
                </div>
                <div className="cart-wish">
                  <button className="add-to-cart-btn">{item.cart}</button>
                  <item.wishList className="fav-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Women;
