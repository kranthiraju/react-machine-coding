import React, { useRef, useState, useEffect } from "react";

const ProductItem = ({ product }) => {
  const imageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setImageSrc(product?.thumbnail);
          observer.disconnect();
        }
      },
      {
        threshold: 1,
      }
    );

    const current = imageRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, [product]);

  return (
    <div className="products-item">
      <img src={imageSrc} ref={imageRef} className={imageSrc ? "loaded" : ""} />
      <b>{product?.title}</b>
      <p>$ {product?.price}</p>
    </div>
  );
};

export default ProductItem;
