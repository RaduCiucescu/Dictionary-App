import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './SourceUrl.css'

const SourceUrl =(props) =>{
const styleIcon={
    color:'#9B9B9B',
    fontSize: ' 1rem',
    marginLeft: '4px',
}

    return (
        <div className='sourceurl-container'>
            <div className="horizontal-line-footer"></div>
            <div className='source-container'>
              <p> Source </p>
              <a href={props.wordData[0].sourceUrls}>{props.wordData[0].sourceUrls}</a>
              <OpenInNewIcon style={styleIcon}/>
              </div>
        </div>
    )
}

export default SourceUrl;