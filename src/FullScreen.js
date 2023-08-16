import React from 'react';
import pic1 from './images/image-product-1.jpg';
import pic2 from './images/image-product-1-thumbnail.jpg';
import pic3 from './images/image-product-2-thumbnail.jpg';
import pic4 from './images/image-product-3-thumbnail.jpg';
import pic5 from './images/image-product-4-thumbnail.jpg';
import pic6 from './images/image-product-2.jpg';
import pic7 from './images/image-product-3.jpg';
import pic8 from './images/image-product-4.jpg';
import next from './images/icon-next.svg';
import previous from './images/icon-previous.svg';

const FullScreen = ({
  showFullScreen,
  closeFullScreen,
  goToPreviousImage,
  goToNextImage,
  selectedMainImage,
  openFullScreen,
}) => {
  if (!showFullScreen) return null;

  return (
    <div className="fullScreenBackdrop" onClick={closeFullScreen}>
      <div className="image">
        <div>
          <img
            src={previous}
            alt="previous"
            className="previous"
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousImage();
            }}
          />
          <img src={selectedMainImage} alt="Main" />
          <img
            src={next}
            alt="next"
            className="next"
            onClick={(e) => {
              e.stopPropagation();
              goToNextImage();
            }}
          />
        </div>

        <div className="smallImg">
          <img
            src={pic2}
            alt="pic2"
            onClick={(e) => {
              e.stopPropagation();
              openFullScreen(pic1);
            }}
            className={selectedMainImage === pic1 ? 'selectedImage' : ''}
          />
          <img
            src={pic3}
            alt="pic3"
            onClick={(e) => {
              e.stopPropagation();
              openFullScreen(pic6);
            }}
            className={selectedMainImage === pic6 ? 'selectedImage' : ''}
          />
          <img
            src={pic4}
            alt="pic4"
            onClick={(e) => {
              e.stopPropagation();
              openFullScreen(pic7);
            }}
            className={selectedMainImage === pic7 ? 'selectedImage' : ''}
          />
          <img
            src={pic5}
            alt="pic5"
            onClick={(e) => {
              e.stopPropagation();
              openFullScreen(pic8);
            }}
            className={selectedMainImage === pic8 ? 'selectedImage' : ''}
          />
          {/*... repeat for other images ...*/}
        </div>
      </div>
    </div>
  );
};

export default FullScreen;
