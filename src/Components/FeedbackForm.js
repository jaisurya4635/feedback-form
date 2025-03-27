



import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    movie: "",
    rating: "",
    comments: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate rating
    if (form.rating < 1 || form.rating > 5) {
      alert("Please enter a rating between 1 and 5");
      return;
    }

    // Get existing reviews or initialize empty array
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [...existingReviews, form];
    
    // Save to localStorage
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    
    // Reset form and navigate
    setForm({ name: "", movie: "", rating: "", comments: "" });
    alert("Thank you for your feedback!");
    navigate("/reviews");
  };

  return (
    <div className="feedback-container">
      <h2>Movie Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Movie: </label>
          <select 
            name="movie" 
            value={form.movie} 
            onChange={handleChange} 
            required
          >
            <option value="">Select a movie</option>
            <option value="Joker">Joker</option>
            <option value="The Dark Knight">The Dark Knight</option>
            <option value="Varanam Aaiyram">Varanam Aaiyram</option>
            <option value="Who am I?">Who am I?</option>
          </select>
        </div>

        <div className="form-group">
          <label>Rating (1-5): </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={form.rating}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Comments: </label>
          <textarea
            name="comments"
            value={form.comments}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;





