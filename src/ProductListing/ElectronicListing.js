import React, { useContext } from 'react';
import { ProductContext } from '../componentSell/ContextForListing';
import './ListingComponent.css';
import Footer from '../componentsHome/FooterComponent';
import NavbarComponent from '../componentsHome/NavbarComponent';

export default function ElectronicsListingComponent() {
  const { products } = useContext(ProductContext);
  const electronicsList = products.electronics;

  return (
    <>
    <NavbarComponent/>
    <section id="electronics-listing" className="listing-section">
      <h1>Available Electronics</h1>
      <div className="grid">
        {electronicsList.length > 0 ? (
          electronicsList.map((electronic, index) => (
            <div className="card" key={index}>
              <img
                src={URL.createObjectURL(electronic.images[0])}
                alt={electronic.title}
              />
              <h2>{electronic.title}</h2>
              <p>Description: {electronic.description}</p>
              <p>Price: ${electronic.price}</p>
              <p>Condition: {electronic.condition}</p>
              <button>Buy Now</button>
            </div>
          ))
        ) : (
          <p>No electronics listed yet.</p>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
}
