import React, { useRef, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
const InputFile = ({ width }) => {
  const handleCustomInputClick = () => {
    fileInputRef.current.click();
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div className="post-form__wrapper">
      <div className="post-form__input-name">Image </div>
      <input
        onChange={handleFileChange}
        ref={fileInputRef}
        type="file"
        className="post-form__input-file"
      />
      <div className="post-form__file">
        <div
          style={{ width: width }}
          onClick={handleCustomInputClick}
          className="post-form__input-custom"
        >
          <AiOutlinePaperClip
            style={{ width: 16, height: 16, color: "var(--textColor)" }}
          />
          <span>Add file&nbsp;</span> or drop files here
        </div>
        <div className="post-form__show-file">
          {selectedFile ? (
            <>
              <img src={URL.createObjectURL(selectedFile)} alt="" />
              <button
                onClick={() => setSelectedFile(null)}
                className="post-form__cancel"
              >
                <MdCancel style={{ width: 20, height: 20, color: "#E0E0E0" }} />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default InputFile;
