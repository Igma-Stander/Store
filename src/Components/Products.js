import React from "react";
import { useState } from "react";
import TotalPrice from "./TotalPrice";
import products from "./Array";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function Products() {
  //wanted each title a different colour, but with .map that was difficult so made another array to loop through
  let colours = [
    "rgb(196, 34, 23)",
    " rgb(29, 113, 81)",
    " rgb(0, 55, 170)",
    "rgb(237, 217, 71)",
    "rgb(196, 34, 23)",
    " rgb(29, 113, 81)",
    " rgb(0, 55, 170)",
    "rgb(237, 217, 71)",
    "rgb(196, 34, 23)",
    " rgb(29, 113, 81)",
  ];

  //used selectedColour for the dropdown button
  let [selectedColour, setSelectedColour] = useState("");
  //used selectedProducts to calculate the total
  let [selectedProducts, setSelectedProducts] = useState([]);
  //used onButton to make sure the total price block only shows when buy is clicked
  let [onButton, setOnButton] = useState(false);

  //updating setSelectedProducts with only the products that were clicked to buy
  let handlePrice = (price) => {
    setSelectedProducts([...selectedProducts, price]);
    setOnButton(true);
  };

  return (
    <div>
      <h1>Products</h1>
      <p>Showing 10 of 10</p>
      {/* rendering each product using the .map method */}
      {products.map((product, index) => (
        // using the new card bootstrap
        <Card>
          <Card.Body>
            {/* making each title a different colour */}
            <Card.Title style={{ color: colours[index] }}>
              {product.title}
            </Card.Title>

            <Card.Img style={{ width: "180px" }} src={product.image} />
            <Card.Text className="text">{product.description}</Card.Text>
            <Card.Text className="price">R{product.price}</Card.Text>

            {/* followed instructions for the dropdown button */}
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: colours[index],
                  border: "solid white 2px",
                }}
                variant="success"
              >
                {selectedColour || "Choose colour"}
              </Dropdown.Toggle>

              {/* making it so that the selected item gets shown instead of "choose colour" */}
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSelectedColour("Rainbow")}>
                  Rainbow
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedColour("Neon")}>
                  Neon
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedColour("Pastel")}>
                  Pastel
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button
              style={{
                backgroundColor: colours[index],
                border: "solid white 2px",
              }}
              variant="success"
              //   using only the price value in the products array
              onClick={() => handlePrice(product.price)}
            >
              Buy now
            </Button>

            {/* only when onButton is true will total price display in corner */}
            {onButton && (
              <TotalPrice
                //   setting the prop equal to the sum calculation
                totalPrice={selectedProducts.reduce(
                  (first, second) => first + second,
                  0
                )}
              />
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Products;
