import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Price from "../components/ui/Price";
import Ratings from "../components/ui/Ratings";
import LeftArrow from '../assets/left-arrow.svg'

const  BookInfo = ({ books, addToCart, cart, cartnumber }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
 
  function addBookToCart(book) {
    addToCart(book);
   
  }

  function bookExistsOnCart() {
return cart.find(book => book.id === +id); 
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <img src={LeftArrow} className='left-arrow'></img>
               
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Ratings rating={book.rating} />
                <Price
                  originalPrice={book.originalPrice}
                  salePrice={book.salePrice}
                />

                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia repudiandae velit eaque magni porro recusandae
                    inventore, delectus dolore expedita sapiente ut. Vero
                    consequuntur modi consequatur corrupti, cupiditate dolores
                    eos itaque!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia repudiandae velit eaque magni porro recusandae
                    inventore, delectus dolore expedita sapiente ut. Vero
                    consequuntur modi consequatur corrupti, cupiditate dolores
                    eos itaque!
                  </p>
                </div>
                <div>
                {bookExistsOnCart()? (
                 <Link to='/cart'> <button className="btn
                  ">Checkout</button></Link>
                  
                ) : (
                  <button className="btn" onClick={(event) =>{
                    addBookToCart(book);
                    } }>
                    Add to Cart
                  </button>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && book.id != id)
                .map((book) => <Book book={book} key={book.id} />)
                .slice(0, 4)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
