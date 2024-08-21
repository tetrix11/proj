import React from 'react';

const testimonials = [
  { id: 1, name: 'John Doe', rating: 5, image: 'john.jpg', comment: 'Amazing food, great service!' },
  { id: 2, name: 'Jane Smith', rating: 4, image: 'jane.jpg', comment: 'Loved the ambiance and the pizza!' },
  { id: 3, name: 'Sam Wilson', rating: 5, image: 'sam.jpg', comment: 'Best restaurant in Chicago!' },
];

function CustomersSay() {
  return (
    <section id="customers">
      <h2>What Our Customers Say</h2>
      <ul>
        {testimonials.map(testimonial => (
          <li key={testimonial.id}>
            <img src={testimonial.image} alt={`${testimonial.name}'s profile`} />
            <h3>{testimonial.name}</h3>
            <p>{'⭐'.repeat(testimonial.rating)}</p>
            <p>{testimonial.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CustomersSay;