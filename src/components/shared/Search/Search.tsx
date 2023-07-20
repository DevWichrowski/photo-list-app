import React, {useState} from 'react';

import "./Search.scss";

interface ISearchProps {
    placeholder?: string;
    onSearch: (event: string) => unknown
}

const Search = (props: ISearchProps) => {
    const {placeholder = "Search photos by title...", onSearch} = props;

    const [search, setSearch] = useState('');

    return (
        <input
            className="Search"
            value={search}
            placeholder={placeholder}
            onChange={e => {
                setSearch(e.target.value)
                onSearch(e.target.value);
            }}
        />
    );
};

export default Search;
