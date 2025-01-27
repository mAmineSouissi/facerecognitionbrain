import React from "react";
import "./imagelinkform.css";

const ImageLinkForm = ({onInputChange, onDetectClick}) => {
    
  return (
    <div>
      <p className="f3">This Magic brain will detect faces</p>
      <div className="flex flex-row justify-center pa4 br2 shadow-3 card">
        <input
          className="f4 pl2 w-70 center ml2"
          type="text"
          placeholder="Enter image link"
          onChange={onInputChange}
        />
        <button className="w-30 grow f4 pv2 dib white bg-light-blue ml2" onClick={onDetectClick}>
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
