import * as htmlToImage from "html-to-image";
import { useEffect, useState } from "react";

const ImagePreviewComponent = ({ urls }) => {
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const promise = await fetch(urls);
    };

    var node = document.querySelector("#root");
    console.log(node);

    htmlToImage
      .toSvg(node)
      .then(function (dataUrl) {
        let newImg = new Image();
        newImg.src = dataUrl;

        document.querySelector("#imgPreviewsDiv").appendChild(newImg);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }, [urls]);

  return <div id="imgPreviewsDiv" className="h-6/12 flex w-6/12 "></div>;
};

export default ImagePreviewComponent;
