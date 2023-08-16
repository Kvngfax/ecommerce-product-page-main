import React, {useState} from 'react';
import pic1 from './images/image-product-1.jpg';
import pic2 from './images/image-product-1-thumbnail.jpg';
import pic3 from './images/image-product-2-thumbnail.jpg';
import pic4 from './images/image-product-3-thumbnail.jpg';
import pic5 from './images/image-product-4-thumbnail.jpg';
import pic6 from './images/image-product-2.jpg';
import pic7 from './images/image-product-3.jpg';
import pic8 from './images/image-product-4.jpg';
import minus from './images/icon-minus.svg';
import add from './images/icon-plus.svg';
import cart from './images/icon-cart.svg';
// import previous from './images/icon-previous.svg';
// import next from './images/icon-next.svg';

const MainBody = ({ amount, nextNumber, prevNumber, addToCart, openFullScreen, selectedMainImage}) => {

    const mainImages = [pic1, pic6, pic7, pic8];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const [startPos, setStartPos] = useState(null);

    const handleSwipe = (start, end) => {
        if (start > end + 50) {  // Swiped or dragged left
            setCurrentIndex(prev => (prev + 1) % mainImages.length);
        } else if (start + 50 < end) {  // Swiped or dragged right
            setCurrentIndex(prev => (prev - 1 + mainImages.length) % mainImages.length);
        }
    };

    const handleStart = (pos) => {
        setStartPos(pos);
    };

    const handleEnd = (pos) => {
        if (startPos !== null) {
            handleSwipe(startPos, pos);
            setStartPos(null);
        }
    };

    const handleMouseDown = (e) => {
        setStartPos(e.clientX);
    };

    const handleMouseUp = (e) => {
        if (startPos) {
            handleSwipe(startPos, e.clientX);
            setStartPos(null);
        }
    };


    return (
        <main
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
            <div className="body">
                <div className="image">
                    <img src={mainImages[currentIndex]} alt="Main" />
          

                    <div className="smallImg">
                        {/* You can loop through the thumbnails instead of hardcoding if you want */}
                        <img src={pic2} alt="pic2" onClick={() => openFullScreen(pic1)} className={selectedMainImage === pic1 ? 'selectedImage' : ''}/>
                        <img src={pic3} alt="pic3" onClick={() => openFullScreen(pic6)} className={selectedMainImage === pic6 ? 'selectedImage' : ''}/>
                        <img src={pic4} alt="pic4" onClick={() => openFullScreen(pic7)} className={selectedMainImage === pic7 ? 'selectedImage' : ''}/>
                        <img src={pic5} alt="pic5" onClick={() => openFullScreen(pic8)} className={selectedMainImage === pic8 ? 'selectedImage' : ''}/>
                    </div>
                </div>

                <div className="body2">
                    <h1>SNEAKER COMPANY</h1>
                    <h2>Fall Limited Edition Sneakers</h2>
                    <p>
                        These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they’ll withstand
                        everything the weather can offer.
                    </p>
                    <div>
                    <div className='price'>
                        <h3>$125.00</h3>
                        <p>50%</p>
                    </div>
                    <p className='original'>$250.00</p>
                    </div>
                    <div className='there'>
                        <button>
                            <img src={minus} alt="minus" onClick={prevNumber} />
                            <p>{amount}</p>
                            <img src={add} alt="add" onClick={nextNumber} />
                        </button>

                        <button onClick={addToCart}>
                            <img src={cart} alt="cart" />
                            <p>Add to cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainBody;
