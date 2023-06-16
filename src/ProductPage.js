import React from 'react';
class ProductPage extends React.Component {
    render() {
      return (
        <div className="product-page">
          <div className="product-image-column">
            <img src="C:/Users/CaoDucAnh/Desktop/Folders/source_code/react/book-prd/src/product.jpg" alt="Product" />
          </div>
          <div className="product-details-column">
            <h2>Product Name</h2>
            <p>Price: $XX.XX</p>
            <div className="color-selection">
              {/* Dropdown Color Selection Button */}
            </div>
            <div className="add-to-cart">
              {/* Quantity Input */}
              {/* Add to Cart Button */}
            </div>
            <p>Product Description</p>
            {/* Products and Reviews */}
          </div>
        </div>
      );
    }
  }
  
  export default ProductPage;