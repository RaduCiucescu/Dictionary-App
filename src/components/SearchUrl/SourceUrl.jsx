import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './SourceUrl.css';


const styleIcon = {
  color: 'var(--lightGray)',
  fontSize: ' 1rem',
  marginLeft: '4px',
};

const SourceUrl = ({isNightMode, sourceUrls}) => {
  
  return (
    <div className="section-container">
      <div className="horizontal-line-footer"></div>
        <p> Source </p>
        <div className="source-url-link">
          {sourceUrls.map((sourceUrls)=>(
          <a className={isNightMode === false ? "day-mode-source-link" : "night-mode-source-link"} href={sourceUrls} target="_blank" key={sourceUrls}>
            {sourceUrls}
          </a>
          ))}
      <OpenInNewIcon style={styleIcon} />

      </div>
    </div>
  );
};

export default SourceUrl;
