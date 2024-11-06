
import * as styles from './Carousel.module.css';
import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!images || images.length === 0) return <p></p>;

    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (

        <div className={styles.container}>
            <div className={styles.carousel}>
                <button onClick={prevSlide} className={`${styles.carousel__btn} ${styles.carousel__btnPrev}`}>
                    &lt;
                </button>
                <img
                    src={images[activeIndex]}
                    alt={`Slide ${activeIndex}`}
                    className={styles.carousel__img}
                />
                <button onClick={nextSlide} className={`${styles.carousel__btn} ${styles.carousel__btnNext}`}>
                    &gt;
                </button>
            </div>
        </div>
    )
};
export default Carousel;