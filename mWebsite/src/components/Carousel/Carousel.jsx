import React from "react";
import { CarouselItem } from "./Carouselitem";
import Assets from "/Users/mool21/Documents/github/Gabler/mWebsite/mWebsite/public/assets/mRooms/f2.png";
import Asset from "/Users/mool21/Documents/github/Gabler/mWebsite/mWebsite/public/assets/mRooms/kikut-1.png";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Fløien",
      description: "fløien 1",
      icon: require({ Assets }),
    },
    {
      title: "Fløien",
      description: "fløien 2",
      icon: require({ Asset }),
    },
  ];

  return (
    <div className="carousel">
      <div className="inner" style={{ transform }}>
        {items.map((item) => {
          return <CarouselItem item={item} />;
        })}
      </div>
    </div>
  );
};
