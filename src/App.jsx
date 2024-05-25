import { useState, useEffect } from "react";

const App = () => {
  const images = [
    "https://superops-images.s3.eu-north-1.amazonaws.com/image+1.webp",
    "https://superops-images.s3.eu-north-1.amazonaws.com/image+2.webp",
    "https://superops-images.s3.eu-north-1.amazonaws.com/image+3.webp",
    "https://superops-images.s3.eu-north-1.amazonaws.com/image+4.webp",
    "https://superops-images.s3.eu-north-1.amazonaws.com/image+5.webp",
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
