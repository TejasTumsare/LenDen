import React, { useContext } from 'react';
import { ProductContext } from '../componentSell/ContextForListing';
import './ListingComponent.css';
import NavbarComponent from '../componentsHome/NavbarComponent';
import Footer from '../componentsHome/FooterComponent';


export default function CarListingComponent() {

  const { products } = useContext(ProductContext);
  const carList = products.cars; 

  console.log("Cars in context:", carList);

  return (
    <>
    <NavbarComponent/>
    <section id="car-listing" className="listing-section">
      <h1>Available Cars</h1>
      <div className="grid">
        {carList.length > 0 ? (
          carList.map((car, index) => (
            <div className="card" key={index}>
              <img
                src={URL.createObjectURL(car.images[0])}
                alt={car.title}
              />
              <h2>{car.title}</h2>
              <p>Description: {car.description}</p>
              <p>Price: ${car.price}</p>
              <p>Condition: {car.condition}</p>
              <button>Buy Now</button>
            </div>
          ))
        ) : (
          <p>No cars listed yet.</p>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
}
