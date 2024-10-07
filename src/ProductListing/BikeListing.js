import React, { useContext } from 'react';
import { ProductContext } from '../componentSell/ContextForListing';
import './ListingComponent.css';
import Footer from '../componentsHome/FooterComponent';
import NavbarComponent from '../componentsHome/NavbarComponent';

export default function BikeListingComponent() {
  const { products } = useContext(ProductContext);
  const bikeList = products.bikes;

  return (
    <>
    <NavbarComponent/>
    <section id="bike-listing" className="listing-section">
      <h1>Available Bikes</h1>
      <div className="grid">
        {bikeList.length > 0 ? (
          bikeList.map((bike, index) => (
            <div className="card" key={index}>
              <img
                src={URL.createObjectURL(bike.images[0])}
                alt={bike.title}
              />
              <h2>{bike.title}</h2>
              <p>Description: {bike.description}</p>
              <p>Price: ${bike.price}</p>
              <p>Condition: {bike.condition}</p>
              <button>Buy Now</button>
            </div>
          ))
        ) : (
          <p>No bikes listed yet.</p>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
}
