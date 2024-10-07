import React, { useState } from "react";
import "../Login/Feedback.css";
import NavbarComponent from "../componentsHome/NavbarComponent";
import Footer from "../componentsHome/FooterComponent";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 
  const ratingDescriptions = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (newRating) => {
    setFeedback((prev) => ({ ...prev, rating: newRating })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setIsSubmitted(true);
  };

  return (
    <>
      <NavbarComponent />
      <div className="feedback-form-container">
        <div className="feedback-form">
          {!isSubmitted ? (
            <>
              <h1>Give Us Your Feedback</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Your Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={feedback.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Your Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Rating:</label>
                  <div className="star-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={`star ${index < feedback.rating ? "filled" : ""}`}
                        onClick={() => handleRatingChange(index + 1)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="rating-description">
                    {feedback.rating > 0 ? ratingDescriptions[feedback.rating - 1] : "Select a Rating"}
                  </div>
                </div>

                <div>
                  <label>Feedback Message:</label>
                  <textarea
                    name="message"
                    value={feedback.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit">Submit Feedback</button>
              </form>
            </>
          ) : (
            <div className="feedback">
              <h1>Thank you for your feedback!</h1>
              <a href="/">Go back to Homepage</a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeedbackForm;
