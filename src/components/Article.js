import React from "react";

const Article = ({ title, children, image, imageAlt, article1, article2 }) => {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-7 lg:gap-20 w-full mb-12 mt-5 md:mt-10">
        {/* article */}
        <article className="md:text-lg lg:text-xl lg:leading-relaxed col-span-1 lg:col-span-5">
          {/* title */}
          <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold md:font-bold font-oxanium leading-relaxed sm:leading-normal md:leading-normal mb-6 text-left">
            {title}
          </h1>

          {/* header image */}
          <figure className="bg-white rounded-2xl px-6 sm:px-10 py-8 sm:py-12 md:py-16 mb-8 md:mb-12">
            <img className="mx-auto" src={image} alt={imageAlt} />
          </figure>

          {/* text */}

          {children}
        </article>

        {/* next articles */}
        <aside className="mb-8 pt-4 lg:w-full col-span-1 lg:col-span-2 h-fit sticky top-0">
          <h3 className="font-oxanium text-indigo-700 font-semibold text-xl">
            Next Articles
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 sm:gap-8 lg:gap-0">
            {article1}
            {article2}
          </div>
        </aside>
      </div>
    </>
  );
};

export default Article;
