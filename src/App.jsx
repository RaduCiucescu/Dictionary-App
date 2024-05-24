import { useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import WordDescription from './components/WordDescription/WordDescription';
import SourceUrl from './components/SearchUrl/SourceUrl';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [wordData, setWordData] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);
  const [currentFont, setCurrentFont] = useState('serif');

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

  const changeBackground = () => {
    setIsNightMode(!isNightMode);
  };

  // const changeFont = () => {
  //   setFontFamily(!fontFamily);
  // };
 
  const refreshPage = (id) => {
    const newPage = [...wordData];
    newPage.splice(id,wordData.length);
    setWordData(newPage);
  };
 

  // const refreshPage = () => {
  //   setWordData([]);
  // };

  // Intrebare: sunt bune variantele de mai sus pentru refresh? 
  // nu am reusit sa se stearga si textul din input, desi cred ca ar trebui
  // cel putin din punct de vedere UI.

  
  return (
    <div 
      className={`${isNightMode === false ? 'day-mode' : 'night-mode'} font-${currentFont}`}
    >
      <Navbar 
        changeBackground={changeBackground}
        isNightMode={isNightMode}
        setIsNightMode={setIsNightMode}
        // changeFont={changeFont}
        refreshPage={refreshPage}
        setCurrentFont={setCurrentFont}
      />
      <SearchInput 
        isNightMode={isNightMode}
        setWordData={setWordData} />
        {wordData[0] === undefined ? null : (
        <WordDescription
        isNightMode={isNightMode}
        wordData={wordData} />
      )}
        {wordData[0] === undefined ? null : <SourceUrl isNightMode={isNightMode} sourceUrls={wordData[0].sourceUrls} />}
    </div>
  );
};

export default App;
