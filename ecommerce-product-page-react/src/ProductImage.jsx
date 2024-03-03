import { useState } from "react";

import imgProduct1 from "./assets/images/image-product-1.jpg";
import imgProduct2 from "./assets/images/image-product-2.jpg";
import imgProduct3 from "./assets/images/image-product-3.jpg";
import imgProduct4 from "./assets/images/image-product-4.jpg";
import iconNext from "./assets/images/icon-next.svg";
import iconPrevious from "./assets/images/icon-previous.svg";

function ProductImage() {
  const images = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
  const [currentImage, setCurrentImage] = useState(imgProduct1);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  function arrowRight() {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((c) => c + 1);
      setCurrentImage(images[currentImageIndex + 1]);
    }
    console.log(currentImageIndex);
  }
  function arrowLeft() {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((c) => c - 1);
      setCurrentImage(images[currentImageIndex - 1]);
    }
    console.log(currentImageIndex);
  }

  function handleImageSelection(e) {
    const parent = e.target.parentNode;
    const children = Array.from(parent.children);
    children.forEach((child) => {
      child.classList.remove("thumbnail-image--selected");
    });
    e.target.classList.add("thumbnail-image--selected");
    console.log(e.target.children);
  }

  return (
    <div className="product-images">
      <div className="image-mobile-control">
        <div className="image-mobile-control__buttons">
          <button onClick={arrowLeft}>
            <i>
              <img src={iconPrevious} />
            </i>
          </button>
          <button onClick={arrowRight}>
            {" "}
            <i>
              <img src={iconNext} />
            </i>
          </button>
        </div>
        <img className="product-image" src={currentImage} />
      </div>
      <div className="image-desktop-control">
        <img className="product-image" src={currentImage} />
        <div className="desktop-images">
          <div
            onClick={(e) => {
              handleImageSelection(e);
              setCurrentImage(imgProduct1);
            }}
            className="thumbnail-wrapper thumbnail-image--selected"
          >
            <img className="thumbnail-image" src={imgProduct1} />
          </div>
          <div
            className="thumbnail-wrapper"
            onClick={(e) => {
              handleImageSelection(e);
              setCurrentImage(imgProduct2);
            }}
          >
            <img className="thumbnail-image" src={imgProduct2} />
          </div>
          <div
            className="thumbnail-wrapper"
            onClick={(e) => {
              handleImageSelection(e);
              setCurrentImage(imgProduct3);
            }}
          >
            <img className="thumbnail-image" src={imgProduct3} />
          </div>
          <div
            className="thumbnail-wrapper"
            onClick={(e) => {
              handleImageSelection(e);
              setCurrentImage(imgProduct4);
            }}
          >
            <img className="thumbnail-image" src={imgProduct4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductImage;
