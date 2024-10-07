import React, { useState, useContext } from "react";
import "./SellComponent.css";
import { ProductContext } from "../componentSell/ContextForListing";
import NavbarComponent from "../componentsHome/NavbarComponent";
import Footer from "../componentsHome/FooterComponent";

const SellForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    condition: "",
    images: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (product.category) {
      addProduct(product.category, product);
      setIsSubmitted(true);
    } else {
      alert("Please select a category before submitting.");
    }
    console.log("Product listed:", product);
    console.log("Selected category:", product.category);
  };

  return (
    <>
      <NavbarComponent />
      <div className="sell-form-container">
        <div className="sell-form">
          {!isSubmitted ? (
            <>
              <h1>Sell Your Product</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Product Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Description:</label>
                  <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Category:</label>
                  <select name="category" onChange={handleChange} required>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="mobiles">Mobiles</option>
                    <option value="cars">Cars</option>
                    <option value="bikes">Bikes</option>
                  </select>
                </div>

                <div>
                  <label>Price:</label>
                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Condition:</label>
                  <select name="condition" onChange={handleChange} required>
                    <option value="">Select condition</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                  </select>
                </div>

                <div>
                  <label>Upload Images:</label>
                  <input
                    type="file"
                    multiple
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </div>

                <button type="submit">Submit Listing</button>
              </form>
            </>
          ) : (
            <div className="product-listed">
              <h2>Product listed successfully!</h2>
              <a href="/">Go back to Homepage</a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellForm;
