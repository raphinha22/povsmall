import poster1 from "../assets/poster/poster1.png";
import poster2 from "../assets/poster/poster2.png";
import poster3 from "../assets/poster/poster3.png";
import poster4 from "../assets/poster/poster4.png";
import ImageSlider, { Slide } from "react-auto-image-slider";
import img from "../assets/action/photo_2025-01-11_10-12-17.jpg";
import img1 from "../assets/action/photo_2025-01-15_14-51-00.jpg";
import icon1 from "../assets/icon/bh.png";
import icon2 from "../assets/icon/l.png";

const Team = () => {
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
    <div className="mt-[100px] pb-[20px]">
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

      <div className="md:mt-[150px] mt-[50px] p-[10px]">
        <h2 className="text-center font-mainfont font-bold md:text-2xl text-[18px] mb-[10px] mt-[-50px]">
          ព័ត៌មានបន្ថែមពីហាង ហេង គន្ធា
        </h2>
        <p className="text-center font-mainfont md:text-[20px] mb-[10px] text-[12px]">
          សេវាកម្មរហ័សទាន់ចិត្ត ផ្តល់ទំនុកចិត្តខ្ពស់ដល់លោកអ្នក
          បុគ្គលិកមានភាពរួសរាយ ព្យាយាមជួយលោកអ្នកអស់ពីចិត្ត
        </p>
        <div className="flex md:flex-row flex-col justify-center items-center gap-[20px]">
          <div className="md:w-[350px] w-[300px] h-[300px] flex flex-col items-center justify-center gap-4 bg-[#4c62bb] p-[10px] rounded-lg shadow-black shadow-md z-[99]">
            <a href="https://maps.google.com/maps?q=11.552086,104.915761&ll=11.552086,104.915761&z=16">
              <img src={icon2} className="w-[70px]" alt="image" />
            </a>
            <h3 className="text-center font-mainfont md:text-[22px] text-white font-bold text-[12px]">
              ទីតាំងរបស់យើង
            </h3>
            <p className="text-center font-mainfont text-sm/8 md:text-[18px] text-white text-[12px]">
              ផ្ទះលេខ 300-302 ផ្លូវ 274 សង្កាត់អូឡាំពិក ខណ្ឌបឹងកេងកង់
              រាជធានីភ្នំពេញ
            </p>
          </div>
          <div className="md:w-[350px] w-[300px] h-[300px] flex flex-col items-center justify-center gap-4 bg-[#4c62bb] p-[10px] rounded-lg shadow-black shadow-md z-[99]">
            <img src={icon1} className="w-[70px]" alt="image" />
            <h3 className="text-center font-mainfont md:text-[22px] text-white font-bold text-[12px]">
              ម៉ោង និងថ្ងៃធ្វើការ
            </h3>
            <p className="text-center font-mainfont md:text-[18px] text-white text-[12px]">
              ថ្ងៃចន្ទ ដល់ ថ្ងៃអាទិត្យ
            </p>
            <p className="text-center font-mainfont md:text-[18px] text-white text-[12px]">
              ម៉ោង 7:00ព្រឹក ដល់ 5:00ល្ងាច
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
