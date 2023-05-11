import React, { useState } from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose }) => {
  const [zipCode, setZipCode] = useState("");
  const [zoneResult, setZoneResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchZone = async (zip) => {
    try {
      const response = await fetch(`https://phzmapi.org/${zip}.json`);
      const zoneResults = await response.json();
      return zoneResults;
    } catch (error) {
      console.error(error);
      throw new Error("Error fetching zone");
    }
  };

  const handleButtonClick = async () => {
    const zipCodeRegex = /^\d{5}$/;
    if (zipCodeRegex.test(zipCode)) {
      try {
        const result = await fetchZone(zipCode);
        setZoneResult(result);
        setErrorMessage("");
      } catch (error) {
        setZoneResult(null);
        setErrorMessage("Error fetching zone. Please try again.");
      }
    } else {
      setZoneResult(null);
      setErrorMessage("Please enter a valid zip code.");
    }
    setZipCode("");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Find Your Zone!</h2>
      <div className="inputContainer">
        <label>Enter Your Zip Code:</label>
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button onClick={handleButtonClick}>Submit</button>
      </div>
      {zoneResult && (
        <div className="zoneDisplay">
          <h3>Your Growing Zone:</h3>
          <p>
            <strong>Zone: </strong>
            {zoneResult.zone}
          </p>
          <p>
            <strong>Temp Range: </strong> {zoneResult.temperature_range}
          </p>
          <p>
            <strong>Lat: </strong>
            {zoneResult.coordinates.lat}
          </p>
          <p>
            <strong>Lon: </strong>
            {zoneResult.coordinates.lon}
          </p>
        </div>
      )}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CustomModal;
