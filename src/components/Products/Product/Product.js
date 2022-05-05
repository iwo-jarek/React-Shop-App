import styles from './Product.module.scss';

import { useState } from 'react';
import { useMemo } from 'react';
import ProductForm from './ProductForm/ProductForm';
import ProductImage from './ProductImage/ProductImage';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  const getPrice = useMemo(() => {
    const result = props.sizes.find(({ name }) => name === currentSize.name);
    return props.basePrice + result.additionalPrice
  }, [props.basePrice, props.sizes, currentSize]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('color', currentColor);
    console.log('size', currentSize);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>
        <ProductForm
          sizes={props.sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}
          colors={props.colors} currentColor={currentColor} setCurrentColor={setCurrentColor}
          handleSubmit={handleSubmit}
          getPrice={getPrice}
        />
      </div>
    </article>

  )
};

export default Product;