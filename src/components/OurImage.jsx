import React from "react";

const OurImage = () => {
  return (
    <div style={{ position: "absolute", top: "7%", width: "100%", textAlign: "center" }}>
      <img
        src="./bitcoin.jpg" // Burada kullanmak istediğiniz resmin yolunu belirtin
        alt="Bitcoin"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};

export default OurImage;
