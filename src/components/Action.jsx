import poster1 from "../assets/poster/poster1.png";
import poster2 from "../assets/poster/poster2.png";
import ImageSlider, { Slide } from "react-auto-image-slider";
import img from "../assets/action/photo_2025-01-11_10-12-17.jpg";
import img1 from "../assets/action/photo_2025-01-15_14-51-00.jpg";
import poster3 from "../assets/poster/poster3.png";
import poster4 from "../assets/poster/poster4.png";
import image from "./image";

const Action = () => {
  const slide = [
    {
      id: 1,
      img: poster1,
    },
    {
      id: 2,
      img: poster2,
    },
    {
      id: 3,
      img: poster3,
    },
    {
      id: 4,
      img: poster4,
    },
  ];

  return (
    <div className="mt-[100px]">
      <div className="w-[100%] h-[600px] overflow-hidden m-auto md:block hidden">
        <ImageSlider effectDelay={1000} autoPlayDelay={1000}>
          <Slide>
            <img src={img} alt="image" className="object-cover" />
          </Slide>
          <Slide>
            <img src={img1} alt="image" className="object-cover" />
          </Slide>
        </ImageSlider>
      </div>

      <div className="w-[100%] h-[450px] overflow-hidden m-auto md:hidden block z-[-99]">
        <ImageSlider effectDelay={1000} autoPlayDelay={3000}>
          {slide.map(({ id, img }) => {
            return (
              <Slide key={id}>
                <img
                  src={img}
                  alt="image"
                  className="object-contain mt-[-175px]"
                />
              </Slide>
            );
          })}
        </ImageSlider>
      </div>
      <h1 className="text-center md:mt-[100px] mt-[20px] md:text-3xl text-xl font-mainfont">
        កម្រងរូបភាព
      </h1>

      <div className="mt-[50px] grid md:grid-cols-4 grid-cols-2 gap-2 p-[10px]">
        {image.map(({ id, img }) => {
          return (
            <a className="overflow-hidden z-[99]" href={img} key={id}>
              <img
                src={img}
                alt="images"
                className="w-[400px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[250px] object-cover"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Action;
