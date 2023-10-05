import React, { useEffect, useState } from "react";
import { Button, Card, CardMedia, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./Carousel.module.scss";
import images from "./images";

const Carousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setIsTransitioning(false);
      }, 100);
    }
  };

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setIsTransitioning(false);
      }, 100);
    }
  };

  const autoNextImage = () => {
    nextImage();
  };

  const currentImage = images[currentImageIndex];

  useEffect(() => {
    const intervalId = setInterval(autoNextImage, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <Container className={styles.carousel}>
      <Card className={styles.card}>
        <CardMedia
          component="img"
          className={`${styles.media} ${isTransitioning ? styles.transitioning : ""}`}
          height="300"
          image={currentImage.imageUrl}
          title={currentImage.title}
        />
        <div className={styles.controls}>
          <Button onClick={prevImage}>
            <ArrowBackIcon />
          </Button>
          <Button onClick={nextImage}>
            <ArrowForwardIcon />
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Carousel;
