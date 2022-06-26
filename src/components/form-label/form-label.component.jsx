import React from "react";

const FormLabel = ({ title, ...otherProps }) => {
  return (
    <label className='px-1 text-white' {...otherProps}>
      {title}
    </label>
  );
};

export default FormLabel;
