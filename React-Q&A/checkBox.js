import React, { useState } from 'react';
import './style.css';
const product = ['Shoes', 'Pant', 'Watch', 'T-Shirt'];
export default function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedOptions((previos) =>
      previos.includes(value)
        ? previos.filter((item) => item !== value)
        : [...previos, value]
    );
  };

  const isAllSelected = product.length == selectedOptions.length;

  const handleAllSelect = () => {
    if (isAllSelected) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions([...product]);
    }
  };
  return (
    <div>
      <div>
        {' '}
        <label>
          <input
            type="checkBox"
            checked={isAllSelected}
            onClick={handleAllSelect}
          />
          All Select
        </label>
      </div>

      {product.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkBox"
              checked={selectedOptions.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            {item}
          </label>
        </div>
      ))}
      <p>Selecte:{selectedOptions.join(', ')}</p>
    </div>
  );
}
