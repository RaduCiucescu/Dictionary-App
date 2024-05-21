import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './Footer.css'

const Footer = (props) =>{

    const styleIcon = {
        fontSize: '2rem',
        color: '#9B9B9B',
    }
    const styleIconTwo = {
        fontSize: '2rem',
        color: '#9C4BE2',
    }


    return (

        <div className='footer-container'>
            {props.isNightMode === false ? 
            <CollectionsBookmarkOutlinedIcon onClick={props.refreshPage} style={styleIcon}/> : <CollectionsBookmarkOutlinedIcon onClick={props.refreshPage} style={styleIconTwo}/>}
          
            <div className='font-nightmode-container'>
                <div className='drop-down'>
                    <div className='night-and-font-family-section'>
                        <div className='drop-down-header'>
                            <button onClick={props.openFontOptions}  className='change-font-button'>
                            <ExpandMoreOutlinedIcon style={styleIconTwo}/>
                            </button>
                        </div>
                            {props.openFont ? 
                            (<div className= {props.isNightMode === false ? 'drop-down-container' : 'drop-down-container-night-mode'}>
                                <p onClick={props.changeFont}>Serif</p>
                                <p onClick={props.changeFont}>Mono</p>
                            </div>) : null }
                    </div>
                </div>
                    <hr />
                        <button onClick={props.changeBackground}> 
                            {props.isNightMode === false ?  (<ToggleOffIcon style={styleIcon}/>) :  (<ToggleOnIcon style={styleIconTwo}/>)}
                        </button>
                        {props.isNightMode === false ? <DarkModeOutlinedIcon style={styleIcon}/> : <DarkModeOutlinedIcon style={styleIconTwo}/>}
            </div>               
        </div>
    )
}

export default Footer