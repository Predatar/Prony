import React, { useRef, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import "./inputFile.scss";
const InputFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const handleCustomInputClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <>
      <div className="appearance-file">
        <input
          onChange={handleFileChange}
          ref={fileInputRef}
          type="file"
          className="appearance-file__input-file"
        />
      </div>
      <div onClick={handleCustomInputClick} className="appearance-file__custom">
        <AiOutlinePaperClip style={{ width: 16, height: 16 }} />
        <span className="appearance-file__drop">Add file&nbsp;</span>{" "}
        <span>or drop files here</span>
      </div>
    </>
  );
};

export default InputFile;
