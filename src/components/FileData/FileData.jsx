import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import { tipo } from "../Result/Poker";
import "./FileData.css";

const FileData = () => {

  const {fileContent} = useContext(GlobalContext)

  return (
    <div className="fileDataContainer">
      <textarea
        readOnly
        value={fileContent?.map(el => `${el} | ${tipo(el)}`).join('\r\n')}
        name="fileData"
        className="fileData"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default FileData;
