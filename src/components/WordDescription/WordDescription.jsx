import WordMeaning from "../WordMeaning/WordMeaning";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './WordDescription.css';

const WordDescription = (props) =>{

    const styleIcon ={
        fontSize: '4rem',
        color: '#9C4BE2',
    }   

    const handlePlay = () => {
        const audio = new Audio(`https://api.dictionaryapi.dev/media/pronunciations/en/${props.wordData[0].word}-us.mp3`)
        audio.play()
      };

    return (
        <div>
            <div className="title-phonetic-play-section">
                <div>
                    <h1 className="word-title">{props.wordData[0].word} </h1>
                    <p className="word-phonetic"> {props.wordData[0].phonetic}</p>
                </div>
                <button onClick={handlePlay}>
                    <PlayCircleIcon style={styleIcon}/>
                </button>
            </div>
            <div>
                {props.wordData[0].meanings.map((meaning, index) => (
                    <WordMeaning key={index} meaning={meaning}  />
                ))}
            </div>
        </div>
    )
}

export default WordDescription;

