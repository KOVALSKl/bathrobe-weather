import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../../redux/slices/searchSlice';
import './SearchBar.scss'

function SearchBar() {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    return (
        <form
            className='search-bar'
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(setValue(search))
            }}
        >
            <img
                className='search-bar__icon'
                src={require('../../assets/search.svg').default}
            />
            <input
                className='search-bar__input'
                value={search}
                placeholder='Search'
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;