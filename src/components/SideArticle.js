import React from "react";
import { useNavigate } from "react-router-dom";

const SideArticle = ({ image, imageAlt, caption, link }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`${link}`)} className="mt-8 group">
      <figure className="bg-white rounded-2xl px-8 py-8 h-44 flex items-center justify-center">
        <img className="" src={image} alt={imageAlt} />
      </figure>
      <figcaption className="text-left font-oxanium text-lg font-semibold py-3 group-hover:text-indigo-600">
        {caption}
      </figcaption>
    </button>
  );
};

export default SideArticle;
