import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import Price from "./Price";
import { useEffect } from "react";
import { useState, useRef } from "react";

const Book = ({ book }) => {
  const [img, setImg] = useState();
const mountedRef = useRef(true);
  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
       if(mountedRef.current === false) {
        setImg(image);
       } 
      }, 200);
    };
    return () => {
      mountedRef.current = false;
    }
     
  });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src}></img>
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          <Ratings rating={book.rating} />
          <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          ></Price>
        </>
      ) : (<>
        <div className="book__img--skeleton"></div>
        <div className="skeleton book__title--skeleton"></div>
        <div className="skeleton book__rating--skeleton"></div>
        <div className="skeleton book__price--skeleton"></div>
     
       
       
        </>)}
    </div>
  );
};

export default Book;
