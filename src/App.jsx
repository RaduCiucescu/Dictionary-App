
import { useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput/SearchInput'
import WordDescription from './components/WordDescription/WordDescription'
import SourceUrl from './components/SearchUrl/SourceUrl'
import Footer from './components/Footer/Footer'

const App = () => {
  const [wordData, setWordData] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);
  const [fontFamily, seFontFamily] = useState(false);
  const [openFont, setOpenFont] = useState(false);


//   const nightMode = () =>{
//     if(isNightMode === false)
//     setIsNightMode(true)
//   }
//   const dayMode = () =>{
//     if(isNightMode === true)
//     setIsNightMode(false)
//   }
// const changeBackground = () =>{
//   setIsNightMode(nightMode);
//   setIsNightMode(dayMode);
//   }
// Intrebare? : cum este mai corect sau cum se face in practica? cum e comentat sau cum am facut mai jos?
  
  const changeBackground = () =>{
    setIsNightMode(!isNightMode);
  }
  
  const changeFont = () => {
    seFontFamily(!fontFamily);
  }


  const openFontOptions = () =>{
    setOpenFont(!openFont);
  }
  const refreshPage = () =>{
    window.location.reload();
  }


  return (
    <div className={`${isNightMode === false ? 'day-mode' : 'night-mode'} ${fontFamily === false ? 'serif' : 'mono'}`}>
      <Footer openFont={openFont} changeBackground={changeBackground}  isNightMode={isNightMode} changeFont={changeFont}  openFontOptions={openFontOptions} refreshPage={refreshPage} />
      <SearchInput setWordData={setWordData}/>
      {wordData[0] === undefined ? null : (<WordDescription wordData={wordData} /> 
      )}
      {wordData[0] === undefined ? null : (<SourceUrl wordData={wordData} />
      )}
    </div>
  )
}

export default App