import React, { useState, useRef, useEffect } from 'react';
import './EcommercePage.css';

import Header from './Header';
import MainBody from './MainBody';
import FullScreen from './FullScreen';
import Cart from './Cart';
import pic1 from './images/image-product-1.jpg';

import pic6 from './images/image-product-2.jpg';
import pic7 from './images/image-product-3.jpg';
import pic8 from './images/image-product-4.jpg';

function EcommercePage() {
  // All your useState, useEffect and functions here

  const [showFullScreen, setShowFullScreen] = useState(false);
  const [selectedMainImage, setSelectedMainImage] = useState(pic1);
  const images = [pic1, pic6, pic7, pic8];
  const [imageIndex, setImageIndex] = useState(0); // Assuming pic1 is the default
  const [amount, setAmount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartAmount, setCartAmount] = useState(0);
  const cartRef = useRef(null);
  const [startPos, setStartPos] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (e) => {
        setStartPos(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const endPos = e.clientX;
        if (startPos > endPos + 50) {
            goToNextImage();
            setIsDragging(false);
        } else if (startPos + 50 < endPos) {
            goToPreviousImage();
            setIsDragging(false);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
  
    const handleSwipe = (start, end) => {
      if (start > end + 50) {
        goToNextImage();
      } else if (start + 50 < end) {
        goToPreviousImage();
      }
    };

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the cart is showing and if the event is outside the cart.
      if (
        showCart &&
        cartRef.current &&
        !cartRef.current.contains(event.target)
      ) {
        setShowCart(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showCart]);

  function goToNextImage() {
    let nextIndex = (imageIndex + 1) % images.length;
    setSelectedMainImage(images[nextIndex]);
    setImageIndex(nextIndex);
  }

  function goToPreviousImage() {
    let prevIndex = (imageIndex - 1 + images.length) % images.length;
    setSelectedMainImage(images[prevIndex]);
    setImageIndex(prevIndex);
  }

  function nextNumber() {
    setAmount((amount) => amount + 1);
  }

  function prevNumber() {
    if (amount > 0) {
      setAmount((amount) => amount - 1);
    }
  }

  function openFullScreen(imageSrc) {
    setSelectedMainImage(imageSrc); // Set the clicked image as the main image
    setShowFullScreen(true);
  }

  function closeFullScreen() {
    setShowFullScreen(false);
  }

  function openCart(e) {
    e.stopPropagation(); // This prevents the event from reaching the document
    setShowCart(true);
  }

  function addToCart() {
    setCartAmount((prevAmount) => prevAmount + amount);
    setShowCart(true);
  }

  function clearCart() {
    setCartAmount(0);
  }

  return (
    <div className="container">
      <Header 
      openCart={openCart}/>
      <MainBody
    selectedMainImage={selectedMainImage}
    amount={amount}
    nextNumber={nextNumber}
    prevNumber={prevNumber}
    addToCart={addToCart}
    openFullScreen={openFullScreen}
    onTouchStart={(e) => {
        const startX = e.touches[0].clientX;

        e.currentTarget.ontouchend = (endEvent) => {
            const endX = endEvent.changedTouches[0].clientX;

            if (startX > endX + 50) {
                goToNextImage();
            } else if (startX + 50 < endX) {
                goToPreviousImage();
            }

            // Clean up the touchend event after it's fired
            e.currentTarget.ontouchend = null;
        };
    }}
    onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            handleSwipe={handleSwipe}
/>

      <FullScreen
        showFullScreen={showFullScreen}
        closeFullScreen={closeFullScreen}
        goToPreviousImage={goToPreviousImage}
        goToNextImage={goToNextImage}
        selectedMainImage={selectedMainImage}
        openFullScreen={openFullScreen}
      />
      <Cart
        showCart={showCart}
        cartAmount={cartAmount}
        clearCart={clearCart}
        cartRef={cartRef} // passing down the ref
      />
      {cartAmount > 0 && (
        <div className="number">
          <p>{cartAmount}</p>
        </div>
      )}
    </div>
  );
}

export default EcommercePage;
