import React from "react";

const Book = ({ book }) => {
  const { image, title, subtitle, price } = book;
  return (
    <div className="overflow-hidden">
      <img
        className="object-cover w-full h-56 md:h-64 xl:h-80"
        src={image}
        alt="book cover"
      />
      <div>
        <p>{title}</p>
        <br />
        <p>{subtitle}</p>
        <br />
        <p>Price: {price}</p>
      </div>
    </div>
  );
};

export default Book;
