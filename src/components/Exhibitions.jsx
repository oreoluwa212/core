// components/Exhibitions.js
import React from "react";
import "./Exhibitions.css"; // Import the CSS file for styling

const exhibitions = [
  {
    img: "/path/to/nike-art-gallery.jpg", // Replace with actual path
    name: "Nike art gallery",
    location: "Lagos, Nigeria",
  },
  {
    img: "/path/to/kubal-center.jpg", // Replace with actual path
    name: "Kubal center",
    location: "Nairobi, Kenya",
  },
  {
    img: "/path/to/didi-museum.jpg", // Replace with actual path
    name: "Didi museum",
    location: "Lagos, Nigeria",
  },
];

const Exhibitions = () => {
  return (
    <section className="exhibitions-section">
      <h2>Discover Exhibitions in Africa</h2>
      <div className="map-and-list">
        <div className="map">
          <img src="/path/to/map-image.png" alt="Map of Africa" />{" "}
          {/* Replace with actual path */}
        </div>
        <div className="exhibitions-list">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="exhibition-item">
              <img src={exhibition.img} alt={exhibition.name} />
              <div className="exhibition-info">
                <h3>{exhibition.name}</h3>
                <p>{exhibition.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
