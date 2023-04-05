import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, title, subtitle, price } = book;
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded-lg shadow-lg hover:shadow-2xl">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt="book cover"
        />
        <div className=" bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-500 p-6 flex flex-col">
          <p className="text-lg font-bold">{title}</p>
          <br />
          <p>
            {subtitle
              ? subtitle.substring(0, 45)
              : "Azure Maps Using Blazor Succinctly, learn how you can"}
            ...
          </p>
          <br />
          <p className="mt-auto">Price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
