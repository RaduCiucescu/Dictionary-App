import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.css'

const SearchInput = (props) =>{

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputValue = formData.get('word');

    const serverResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
    const parsedData = await serverResponse.json();
    
    props.setWordData(parsedData);
}

    return (
        <form className='form-container' onSubmit={handleSubmit} >
            <input className='input-container' type='text' name='word' />
            <button className='search-button'>
                <SearchIcon style={{color:'#9C4BE2'}} />
            </button>
        </form>
    )
}

export default SearchInput;