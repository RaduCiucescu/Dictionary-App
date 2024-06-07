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


  const toggleBackground = () => {
    setIsNightMode(!isNightMode);
  };

  const refreshPage = () => {
    setWordData([]);
  };

  return (
    <div 
      className={`${isNightMode === false ? 'day-mode' : 'night-mode'} font-${currentFont}`}
    >
      <Navbar 
        changeBackground={toggleBackground}
        isNightMode={isNightMode}
        setIsNightMode={setIsNightMode}
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
