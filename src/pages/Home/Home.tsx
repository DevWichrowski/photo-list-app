import React, {ChangeEvent, useEffect, useState} from 'react';
import {IPhoto, useApi} from "../../hooks/useApi";
import {debounce} from "../../utils/funcs";
import Search from "../../components/shared/Search/Search";
import List from "../../components/shared/List/List";
import PhotoCard from "../../components/shared/PhotoCard/PhotoCard";
import Skeleton from "react-loading-skeleton";

import "./Home.scss";

const Home = () => {
    const {data} = useApi('https://jsonplaceholder.typicode.com/albums/1/photos');

    const [searchResults, setSearchResults] = useState(data);

    useEffect(() => {
        if (!data) {
            return
        }

        setSearchResults(data);
    }, [data])

    const handleSearch = (value: string) => {
        if (!data) {
            return;
        }

        setSearchResults(undefined);

        const searchTerm = value.toLowerCase();

        const filteredResults = data.filter((item: IPhoto) =>
            item.title.toLowerCase().includes(searchTerm)
        );

        setSearchResults(filteredResults);
    };

    const debouncedHandleSearch = debounce(handleSearch, 1000);

    return (
        <div className="Home">
            <Search onSearch={debouncedHandleSearch}/>
            <div className="Home__list-wrapper">
                <List
                    data={searchResults}
                    renderItem={(item) => <PhotoCard id={item.id} image={item.image} title={item.title} />}
                    loadingComponent={<Skeleton width={300} height={225} />}
                />
            </div>
        </div>
    );
};

export default Home;
