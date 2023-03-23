import React, { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);

  const getCurrentLocation = () => {};

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <button onClick={getCurrentLocation}>Update Location</button>
      {location && <></>}
    </div>
  );
};

export default Location;
