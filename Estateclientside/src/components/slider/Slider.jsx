import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [ImageIndex, setImageIndex] = useState(null);

  const changeslider = (direction) => {
    if (direction==="left") {
      if (ImageIndex === 0) {
        setImageIndex(images.length-1);
      }else{
        setImageIndex(ImageIndex-1)
      }

    } else {
      if (ImageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(ImageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {ImageIndex !== null && (
        <div className="fullslider">
          <div className="arrow" onClick={()=>changeslider("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imagecontainer">
            <img src={images[ImageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={()=>changeslider()}>
            <img src="/arrow.png" className="right" alt="" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigimage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallimages">
        {images.slice(1).map((imge, index) => (
          <img
            src={imge}
            alt="error"
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

// import { useState } from "react";
// import "./slider.scss";

// function Slider({ images }) {
//   const [imageIndex, setImageIndex] = useState(null);

//   const changeSlide = (direction) => {
//     if (direction === "left") {
//       if (imageIndex === 0) {
//         setImageIndex(images.length - 1);
//       } else {
//         setImageIndex(imageIndex - 1);
//       }
//     } else {
//       if (imageIndex === images.length - 1) {
//         setImageIndex(0);
//       } else {
//         setImageIndex(imageIndex + 1);
//       }
//     }
//   };

//   return (
//     <div className="slider">
//       {imageIndex !== null && (
//         <div className="fullSlider">
//           <div className="arrow" onClick={() => changeSlide("left")}>
//             <img src="/arrow.png" alt="" />
//           </div>
//           <div className="imgContainer">
//             <img src={images[imageIndex]} alt="" />
//           </div>
//           <div className="arrow" onClick={() => changeSlide("right")}>
//             <img src="/arrow.png" className="right" alt="" />
//           </div>
//           <div className="close" onClick={() => setImageIndex(null)}>
//             X
//           </div>
//         </div>
//       )}
//       <div className="bigImage">
//         <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
//       </div>
//       <div className="smallImages">
//         {images.slice(1).map((image, index) => (
//           <img
//             src={image}
//             alt=""
//             key={index}
//             onClick={() => setImageIndex(index + 1)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;
