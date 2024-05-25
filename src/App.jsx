import { useState, useEffect } from "react";

const App = () => {
  const images = [
    "https://d1qkelptvjrhil.cloudfront.net/image%201.webp",
    "https://d1qkelptvjrhil.cloudfront.net/image%202.webp",
    "https://d1qkelptvjrhil.cloudfront.net/image%203.webp",
    "https://d1qkelptvjrhil.cloudfront.net/image%204.webp",
    "https://d1qkelptvjrhil.cloudfront.net/image%205.webp",
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      loadNextImage();
    }, 3000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };
  const loadPrevImage = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  return (
    <div>
      <p className="font-semibold text-3xl text-center mt-4">Image Slider</p>

      <div className="m-2 p-2 flex justify-center items-center">
        <img
          onClick={loadPrevImage}
          className="w-20 h-20 cursor-pointer"
          alt="left arrow"
          src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
        />
        <img className="w-[800px]" src={images[active]} alt="wallpaper" />
        <img
          onClick={loadNextImage}
          className="w-20 h-20 cursor-pointer"
          alt="right arrow"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />
      </div>
    </div>
  );
};
export default App;
