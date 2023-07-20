import React, {ChangeEvent, useEffect, useState} from 'react';
import {IPhoto, useApi} from "./hooks/useApi";
import List from "./components/shared/List/List";
import Skeleton from "react-loading-skeleton";
import PhotoCard from "./components/shared/PhotoCard/PhotoCard";
import Search from "./components/shared/Search/Search";

import {debounce} from "./utils/funcs";

import './App.scss';

const App = () => {
    const {data} = useApi('https://jsonplaceholder.typicode.com/albums/1/photos');

    const [searchResults, setSearchResults] = useState(data);

    useEffect(() => {
        if (!data) {
            return
        }

        setSearchResults(data);
    }, [data])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        if (!data) {
            return;
        }

        setSearchResults(undefined);

        const searchTerm = event.target.value.toLowerCase();

        const filteredResults = data.filter((item: IPhoto) =>
            item.title.toLowerCase().includes(searchTerm)
        );

        setSearchResults(filteredResults);
    };

    const debouncedHandleSearch = debounce(handleSearch, 1000);

    return (
        <div className="App">
            <Search onSearch={debouncedHandleSearch}/>
            <div className="App__list-wrapper">
                <List
                    data={searchResults}
                    renderItem={(item) => <PhotoCard id={item.id} image={item.image} title={item.title} />}
                    loadingComponent={<Skeleton width={300} height={225} />}
                />
            </div>
        </div>
    );
}

export default App;
