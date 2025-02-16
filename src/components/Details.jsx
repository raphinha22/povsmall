import { useParams } from "react-router-dom";
import { useState } from "react";
import all from "./all";

const Details = () => {
  const { id } = useParams();
  const data = all.find((d) => d.id == id);

  if (!data) {
    return <div className="text-center text-red-500">No details found</div>;
  }
  const images = [data.img1, data.img2, data.img3, data.img4, data.img5].filter(Boolean);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="py-[20px] flex flex-col items-center justify-center h-[100vh]">
      {/* Large Displayed Image */}
      <div className="flex flex-col items-center mt-[50px]">
        <img
          src={selectedImage}
          alt=""
          className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover border rounded-lg shadow-lg"
        />
        <p className="mt-4 text-lg font-semibold">{data.text}</p>
      </div>

      <div className="flex flex-wrap justify-center items-end gap-4 mt-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`w-[100px] h-[100px] object-cover cursor-pointer border rounded-lg hover:opacity-80 ${
              selectedImage === img ? "border-4 border-blue-500" : ""
            }`}
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
