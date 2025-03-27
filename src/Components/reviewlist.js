

import { useEffect, useState } from "react";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  return (
    <div className="reviews-container">
      <h2>Movie Reviews</h2>
      
      {reviews.length === 0 ? (
        <p className="no-reviews">No reviews submitted yet.</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.movie}</h3>
              <p><strong>Reviewer:</strong> {review.name}</p>
              <p><strong>Rating:</strong> {review.rating}/5</p>
              {review.comments && (
                <p><strong>Comments:</strong> {review.comments}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewList;

