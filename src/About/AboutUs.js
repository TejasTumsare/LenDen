import Footer from "../componentsHome/FooterComponent";
import NavbarComponent from "../componentsHome/NavbarComponent";
import aboutimg from "../asset/about-img/about-img.avif";
import johndoe from "../asset/about-img/john-doe.avif";
import jasmine from "../asset/about-img/lara-corp.avif";
import "./About-Us.css";
import React, { useEffect, useRef } from "react";



const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="About-page">
        <NavbarComponent />
        <section className="heading-section">
          <div className="about-content">
            <h1>Welcome to LenDen</h1>
            <p>
              LenDen is more than just an auction website. It's a platform where
              you can discover <br /> unique products and sell your own items.
              Whether you're a buyer or a seller, <br /> LenDen has got you
              covered.
            </p>
            <p>
              With a vast array of products from various categories, LenDen
              offers <br /> something for everyone. From electronics to mobiles,{" "}
              <br /> cars to bikes, you'll find it all here.
            </p>
            <p>
              Our easy-to-use interface ensure a seamless experience for all our
              users.
              <br /> Join the LenDen community today and start your buying
              <br /> or selling journey with us!
            </p>
          </div>
          <div className="about-img">
            <img src={aboutimg} alt="" />
          </div>
        </section>

        <section className="our-mission">
          <div className="our-mission-content">
            <h1>Our Mission</h1>
            <p>
              At LenDen, our mission is to provide a seamless, user-friendly
              platform where buyers and sellers from all walks of life can
              connect. With a vast range of categories – from electronics to
              cars, and mobiles to bikes – we offer something for everyone.
            </p>

            <h2>What We Offer</h2>
            <ul>
              <li>A wide variety of products from different categories.</li>
              <li>An easy-to-use interface for smooth transactions.</li>
              <li>
                A community-driven platform that fosters trust and reliability.
              </li>
            </ul>
          </div>
        </section>

        <section ref={sectionRef} className="our-team">
          <h1>Meet the Team</h1>
          <div className="team-section">
            <div className="team-member first">
              <div className="member-img">
                <img src={johndoe} alt="" />
              </div>
              <div className="member-info">
                <h3>John Doe – Founder & CEO</h3>
                <p>
                  John founded LenDen with the vision to create a simple yet
                  powerful platform for buyers and sellers. His leadership has
                  driven LenDen's success since its inception.
                </p>
              </div>
            </div>
            <div className="team-member second">
              <div className="member-info">
                <h3>Jasmine Smith – Chief Operating Officer</h3>
                <p>
                  Jane oversees daily operations at LenDen, ensuring that every
                  transaction runs smoothly and that our users have the best
                  possible experience.
                </p>
              </div>
              <div className="member-img">
                <img src={jasmine} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="call-to-action">
          <div className="cta-content">
            <h2>Ready to Join LenDen?</h2>
            <p>
              Whether you're buying or selling, LenDen offers a secure and 
              easy-to-use platform for all your needs. Sign up today and become 
              a part of our growing community!
            </p>
            <a href="/signup"><button className="cta-button">Sign Up Now</button></a>
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default About;
