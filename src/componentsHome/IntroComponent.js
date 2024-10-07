import './IntroComponent.css'
import IntroBg from '../asset/svg/BlackHoleBg'

export default function IntroComponent(){

    return(
        <>
          <section className="intro-page">
            <IntroBg/>
            <div className="intro">
              <h1>Introducing www.LenDen.com</h1>
              <p>Welcome to our innovative auction website, <br />where you can buy and sell products with <br /> ease.</p>
              <div className="btn-section">
                <a href='#product-id' className="buy-btn">Buy</a>
                <a href='/sellform' className="sell-btn">Sell</a>
              </div>
            </div>
          </section>
        </>
    )
    
}