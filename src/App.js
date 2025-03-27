import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FeedbackForm from "./component/FeedbackForm";
import ReviewList from "./component/ReviewList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="app-nav">
          <Link to="/feedback">Give Feedback</Link>
          <Link to="/reviews">View Reviews</Link>
        </nav>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<FeedbackForm />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/reviews" element={<ReviewList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;




