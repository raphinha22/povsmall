import imgs from "../assets/home/images.png";
import images from "../assets/home/image.png";
import ImageSlider, { Slide } from "react-auto-image-slider";
import img from "../assets/action/photo_2025-01-11_10-12-17.jpg";
import img1 from "../assets/action/photo_2025-01-15_14-51-00.jpg";
import poster1 from "../assets/poster/poster1.png";
import poster2 from "../assets/poster/poster2.png";
import poster3 from "../assets/poster/poster3.png";
import poster4 from "../assets/poster/poster4.png";
import sms from "../assets/image/Facebook_Messenger_logo_2020.svg.png";

const Home = () => {
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

  const openMessenger = () => {
    const fbUserId = "100071925840984"; // Your Facebook User ID
    const message = encodeURIComponent("Hello, I need support."); // Auto-filled message
    window.open(`https://m.me/${fbUserId}?text=${message}`, "_blank");
  };

  return (
    <div className="mt-[90px]">
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

      <div className="flex flex-col items-center justify-center h-[100vh] md:gap-[0px] gap-[20px] lg:relative md:mt-[100px] top-[-10px]">
        <button
          onClick={openMessenger}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex items-center gap-3 justify-center mt-[50px]"
        >
          <img src={sms} alt="sms" className="w-[30px]" />
          <h4 className="font-mainfont">ខ្ញុំចង់បង់រំលស់ម៉ូតូ</h4>
        </button>
        <h1 className="font-mainfont lg:text-2xl font-semibold text-maincolor md:text-xl md:mt-[100px] mt-[10px]">
          ហាងម៉ូតូ ហេង គន្ធា
        </h1>
        <div
          className="lg:px-[50px] lg:mt-[50px] lg:flex lg:flex-row lg:gap-[100px] justify-center items-center md:flex md:flex-col md:mt-[50px] 
        flex flex-col
        "
        >
          <div className="z-[99]">
            <img
              src={images}
              alt="image"
              className="lg:w-[450px] lg:h-[500px] object-cover object-top rounded-md md:w-[300px] md:h-[350px] w-[250px] h-[300px]"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-mainfont font-bold lg:text-2xl text-maincolor md:text-xl md:mt-[40px] text-center md:text-left mt-[30px]">
              អំពីហាងម៉ូតូ <span className="text-red-500">ហេង គន្ធា</span>
            </h1>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              បង់រំលស់សុទ្ធ 100%
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              មិនត្រូវការលុយកក់មុន
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              ឯកសារងាយស្រួល{" "}
              <span className="md:text-[15px] text-[10px]">
                (អត្តសញ្ញាណប័ណ្ណ និង សៀវភៅគ្រួសារ)
              </span>
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              អត្រាការប្រាក់ទាប ត្រឹមតែ 1.2%
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              បង់រំលស់បានគ្រប់ប្រភេទម៉ូតូទាំងអស់
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              អាចធ្វើការបង់ផ្តាច់ចាប់ពី 6 ខែឡើងទៅ
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              អតិថិជនអាចរើសយករយៈពេលបង់រំលស់បាន
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              សន្សំត្រឹមតែ 8000រៀល ក្នុងមួយថ្ងៃក៏អាចរំលស់បាន
            </li>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-[100vh] md:mt-[150px] lg:mt-[0px] md:gap-10 gap-[40px] mt-[100px]">
        <h1 className="lg:mb-[40px] font-mainfont lg:text-2xl font-semibold text-maincolor md:text-xl">
          អំពីការប្រមូលសិន
        </h1>
        <div className="px-[50px] flex lg:flex-row lg:gap-[100px] md:gap-[50px] justify-center items-center md:flex-col flex-col gap-[40px] mt-[30px text-[12px]]">
          <div className="">
            <img
              src={imgs}
              alt="image"
              className="lg:w-[450px] lg:h-[500px] md:w-[350px] md:h-[400px] object-cover object-top rounded-md"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-mainfont font-bold lg:text-2xl md:text-xl text-maincolor">
              មានប្រមូលសិនជា <span className="text-red-500">ពិសេស</span>
            </h1>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              ថែមជាមួយ <span className="text-red-500">ទូរស័ព្ទដៃ</span>{" "}
              ចំនួនមួយគ្រឿង
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              ថែមជាមួយទឹកប្រាក់ចំនួន <span className="text-red-500">100$</span>
            </li>
            <li className="font-mainfont text-maincolor font-semibold lg:text-xl md:text-[18px] sm:text-[12px] text-[11px]">
              ថែមជាមួយកាដូចំនួន<span className="text-red-500"> 18 មុខ </span>
              ផ្សេងទៀត
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
