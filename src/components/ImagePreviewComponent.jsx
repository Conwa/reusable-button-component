/* eslint-disable react/prop-types */
import * as htmlToImage from "html-to-image";
import { useEffect, useState } from "react";

const ImagePreviewComponent = ({ urls }) => {
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    var node = document.querySelector("#root");

    htmlToImage
      .toSvg(node)
      .then(function (dataUrl) {
        let newImgUrl = dataUrl;
        let otherImg = dataUrl;

        setImagePreviews([...imagePreviews, newImgUrl, dataUrl]);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }, [urls]);

  return (
    <div className=" flex flex-grow flex-col items-center justify-center gap-20">
      <h1 className=" text-2xl font-bold">Reusable Components</h1>
      <div className="flex gap-8">
        {imagePreviews.map((el, index) => {
          return (
            <div
              key={index}
              className=" rounded-lg shadow-inner transition duration-500 hover:scale-105"
            >
              <img src={el} className="h-52 w-auto p-2"></img>
            </div>
          );
        })}
      </div>
      <div>
        <p className=" text-xs italic text-slate-400">
          fetching url to list pages pendind
        </p>
      </div>
    </div>
  );
};

export default ImagePreviewComponent;
