import React from 'react'
import FileData from '../FileData/FileData'
import FileInput from '../FileInput/FileInput'
import Result from '../Result/Result'
import './PokerContainer.css'

const PokerContainer = () => {
  return (
    <div className='pokerContainer'>
      <h2>Poker gozu</h2>
      <div className='fileContainer'>
        <FileInput/>
        <FileData/>
      </div>
      <Result/>
    </div>
  )
}

export default PokerContainer