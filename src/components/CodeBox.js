import React from "react";

const CodeBox = ({ children, title }) => {
  return (
    <>
      <div className="bg-indigo-900 text-white py-6 sm:py-9 px-4 sm:px-8 text-sm overflow-x-scroll md:overflow-x-hidden rounded-xl sm:text-base max-w-fit mx-auto lg:max-w-xl lg:overflow-x-scroll">
        <pre>
          <code>{children}</code>
        </pre>
      </div>
      <h4 className="mt-3 mb-8 sm:mb-10 italic font-medium text-center">
        {title}
      </h4>
    </>
  );
};

export default CodeBox;
