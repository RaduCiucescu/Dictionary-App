import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './Navbar.css';

const styleIcon = {
  fontSize: '2rem',
  color: 'var(--lightGray)',
};
const styleIconTwo = {
  fontSize: '2rem',
  color: 'var(--mediumPurple)',
};
const styleRefreshIconDayMode = {
  fontSize: '2rem',
  color: 'var(--lightGray)',
  cursor: 'pointer',
};
const styleRefreshIconNightMode = {
  fontSize: '2rem',
  color: 'var(--mediumPurple)',
  cursor: 'pointer',
};
 
const Navbar = ({closeFontOptions, isNightMode, changeBackground, refreshPage, setCurrentFont, setIsNightMode}) => {

  const handleClick = (e) =>{
    e.preventDefault();
    const selectValue = e.target.value;
    setCurrentFont(selectValue);
  }

  const handleBackground = () => {isNightMode === true ? setIsNightMode(false) : setIsNightMode(true)}

  return (
    <nav onClick={closeFontOptions} className="section-container nav-bar-container">
      {isNightMode === false ? (
        <CollectionsBookmarkOutlinedIcon
          onClick={refreshPage}
          style={styleRefreshIconDayMode}
        />
      ) : (
        <CollectionsBookmarkOutlinedIcon
          onClick={refreshPage}
          style={styleRefreshIconNightMode}
        />
      )}
      <div className="font-and-change-background-section-container">
        <div  className="select-font-container">
          <select onClick={handleClick} className={isNightMode === false ? "select-day-mode" : "select-night-mode"} name="font" id="font">
            <option value="serif">Serif</option>
            <option value="arial">Arial</option>
            <option value="roboto">Roboto</option>
            <option value="mono">Mono</option>
          </select>
          <div className="icon-container">
            <ExpandMoreOutlinedIcon  style={styleIconTwo}/>
          </div>
        </div>
        <hr />
        <button onClick={handleBackground}>
        {isNightMode === false ? (
            <ToggleOffIcon style={styleIcon} />
          ) : (
            <ToggleOnIcon style={styleIconTwo} />
          )}
        </button>
        {isNightMode === false ? (
          <DarkModeOutlinedIcon style={styleIcon} />
        ) : (
          <DarkModeOutlinedIcon style={styleIconTwo} />
        )}
      </div>

      
    </nav>
  );
};

export default Navbar;
