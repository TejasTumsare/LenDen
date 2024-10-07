import { useNavigate } from 'react-router-dom';
import './ProductComponent.css';
import carimg from '../asset/product-img/car.jpg';
import bikeimg from '../asset/product-img/bike.jpg';
import mobileimg from '../asset/product-img/iphone.jpg';
import electronicsimg from '../asset/product-img/electronics.jpg';

export default function ProductComponent() {
  const navigate = useNavigate();

  const products = [
    { id: 1, img: carimg, title: 'Cars Section', link: '/cars'},
    { id: 2, img: bikeimg, title: 'Bikes Section', link: '/bikes'},
    { id: 3, img: mobileimg, title: 'Mobiles Section', link: '/mobiles'},
    { id: 4, img: electronicsimg, title: 'Electronics Section', link: '/electronics'}
  ];

  return (
    <section id="product-id" className="product-section">
      <h1>Explore the Products</h1>
      <div className="card-section">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => product.link && navigate(product.link)}
          >
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
