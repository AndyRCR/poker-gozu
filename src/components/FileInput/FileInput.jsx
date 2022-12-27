import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './FileInput.css'

const replaceComas = (string) =>{
  return string
  .replaceAll(",","")
  .replaceAll(";","")
}

const FileInput = () => {

  const {setFileContent} = useContext(GlobalContext)

  const fileReader = new FileReader()
  
  fileReader.onloadend = () => {
    const content = fileReader.result
    let data = content.split('\r\n').map(el => replaceComas(el)).filter( el => !isNaN(parseFloat(el)))

    setFileContent(data)
  }

  const handleFile = (file) => {
    fileReader.readAsText(file)
  }

  return (
    <div className='fileInputContainer'>
      <input
      onChange={e => handleFile(e.target.files[0])}
      type="file"
      name="fileInput"
      id="fileInput"
      accept='.txt'/>
    </div>
  )
}

export default FileInput