import React from 'react';
import './styling/Trend.css';
import Footer from './Footer.';

const trendPosts = [
  {
    id: 1,
    title: "🔥 Jus how you like them",
    category: "Cool",
    date: "April 20, 2025",
    summary: "Urban fits with a futuristic twist. Reflective, oversized, and ice cold.",
    image: "/images/S1.png"  // Path from /public folder
  },
  {
    id: 2,
    title: "🌸 Vintage is the New Now",
    category: "Vintage",
    date: "April 18, 2025",
    summary: "Retro prints, flared jeans, and old-school flair — timeless and trendy.",
    image: "https://images.unsplash.com/photo-1520975918312-7d14c10efcd4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "💋 Sultry in Satin",
    category: "Sexy",
    date: "April 21, 2025",
    summary: "Silky smooth fits that hug every curve. A night-out essential.",
    image: "/images/S3.png"
  }
];

const TrendJournal = () => {
  return (
    <section className="trends-journal">
      <h2>🔥 Trend Journal</h2>
      <p className="journal-intro">From cozy winter fits to summer slay — here’s what’s trending right now.</p>
      <div className="trend-grid">
        {trendPosts.map(post => (
          <div key={post.id} className="trend-card">
            <img src={post.image} alt={post.title} className="trend-img" />
            <div className="trend-info">
              <h3>{post.title}</h3>
              <p className="trend-meta">{post.category} • {post.date}</p>
              <p className="trend-summary">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
};

export default TrendJournal;