"use client";
import { Card, CardBody, Image } from "@nextui-org/react";
import React, { FC, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface Props {
  images: string[];
}

const Gallery: FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleOpen = (index: number) => {
    console.log(index);
    setCurrentIndex(index);
  };

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {images.map((image, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <CardBody>
                <Image
                  onClick={() => handleOpen(index)}
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="rounded-lg object-cover"
                  width="100%"
                  height="auto"
                />
              </CardBody>
            </Card>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Lightbox
        plugins={[Captions, Counter, Zoom]}
        index={currentIndex}
        slides={images.map((image) => ({
          src: image ?? "",
        }))}
        open={currentIndex >= 0}
        close={() => setCurrentIndex(-1)}
      />
    </>
  );
};

export default Gallery;
