import React from 'react';
import './WordMeaning.css';

const WordMeaning = props => {
  return (
    <div className="section-container">
      <div className="adjective-and-line-break">
        <h3 className="adjective-word">{props.meaning.partOfSpeech}</h3>
        <div className="horizontal-line"></div>
      </div>
      <p className="meaning-text"> Meaning </p>
      <ul>
        {props.meaning.definitions.map((definition,index) => (
          <li className={props.isNightMode === false ? "day-mode-list" : "night-mode-list"} key={index}>{definition.definition}</li>
        ))}
      </ul>

      <div className="synonyms-sections">
        {props.meaning.synonyms.length === 0 ? null : <p> Synonyms </p>}
        {props.meaning.synonyms.map((synonym, index) => (
          <p key={index} className="synonyms-result">
            {synonym}
          </p>
        ))}
      </div>

      <div className="synonyms-sections">
        {props.meaning.antonyms.length === 0 ? null : <p> Antonyms </p>}
        {props.meaning.antonyms.map((antonym) => (
          <p key={antonym} className="synonyms-result">
            {antonym}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WordMeaning;
