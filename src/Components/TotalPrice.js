import React from "react";

//using totalPrice as a prop
function TotalPrice({ totalPrice }) {
  return (
    <div className="total">
      <h2>Total price:</h2>
      <p>R{totalPrice}</p>
    </div>
  );
}

export default TotalPrice;
