import React, { useContext } from 'react';
import { ProductContext } from '../componentSell/ContextForListing';
import './ListingComponent.css';
import NavbarComponent from '../componentsHome/NavbarComponent';
import Footer from '../componentsHome/FooterComponent';

export default function MobileListingComponent() {
  const { products } = useContext(ProductContext);
  const mobileList = products.mobiles;

  return (
    <>
    <NavbarComponent/>
    <section id="mobile-listing" className="listing-section">
      <h1>Available Mobiles</h1>
      <div className="grid">
        {mobileList.length > 0 ? (
          mobileList.map((mobile, index) => (
            <div className="card" key={index}>
              <img
                src={URL.createObjectURL(mobile.images[0])}
                alt={mobile.title}
              />
              <h2>{mobile.title}</h2>
              <p>Description: {mobile.description}</p>
              <p>Price: ${mobile.price}</p>
              <p>Condition: {mobile.condition}</p>
              <button>Buy Now</button>
            </div>
          ))
        ) : (
          <p>No mobiles listed yet.</p>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
}
