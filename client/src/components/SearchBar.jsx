import '../assets/styles/components/searchbar.css'

export default function SearchBar({category}) {
    return(
        <input 
            type="text" 
            placeholder="Ricerca" 
            className='search-bar'
        />
    );
}