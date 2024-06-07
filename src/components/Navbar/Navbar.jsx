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
 
const Navbar = ({closeFontOptions, isNightMode, refreshPage, setCurrentFont, setIsNightMode}) => {

  const handleClick = (e) =>{
    e.preventDefault();
    const selectValue = e.target.value;
    setCurrentFont(selectValue);
  }

  const fonts =['serif', 'arial', 'roboto', 'mono'];

  const handleBackground = () => {isNightMode === true ? setIsNightMode(false) : setIsNightMode(true)}

  return (
    <nav onClick={closeFontOptions} className="section-container nav-bar-container">  
      <CollectionsBookmarkOutlinedIcon 
      onClick={refreshPage}
      style={isNightMode ? 
      styleRefreshIconNightMode : styleRefreshIconDayMode} />
      <div className="font-and-change-background-section-container">
        <div  className="select-font-container">
          <select onClick={handleClick} className={isNightMode === false ? "select-day-mode" : "select-night-mode"} name="font" id="font">
            {fonts.map((option)=>(
              <option style={{textTransform: 'capitalize'}} key={option} value={option}>{option} </option>
            ))}
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
        <DarkModeOutlinedIcon
         style={ isNightMode
          ? styleIconTwo : styleIcon} />
      </div> 
    </nav>
  );
};

export default Navbar;
