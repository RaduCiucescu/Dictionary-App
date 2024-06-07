import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './SourceUrl.css';


const styleIcon = {
  color: 'var(--lightGray)',
  fontSize: ' 1rem',
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
            <OpenInNewIcon style={styleIcon} />
          </a>
          ))}

      </div>
    </div>
  );
};

export default SourceUrl;
