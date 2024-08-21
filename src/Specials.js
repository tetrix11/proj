import React from 'react';

const specialsData = [
  { id: 1, name: 'Spaghetti Carbonara', description: 'Delicious pasta with creamy sauce', price: '$12.99' },
  { id: 2, name: 'Margherita Pizza', description: 'Classic pizza with fresh tomatoes and basil', price: '$10.99' },
  { id: 3, name: 'Caesar Salad', description: 'Crisp romaine lettuce with Caesar dressing', price: '$8.99' },
];

function Specials() {
  return (
    <section id="specials">
      <h2>Our Specials</h2>
      <ul>
        {specialsData.map(special => (
          <li key={special.id}>
            <h3>{special.name}</h3>
            <p>{special.description}</p>
            <p>{special.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Specials;