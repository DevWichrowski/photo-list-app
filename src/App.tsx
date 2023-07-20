import React from 'react';
import './App.scss';
import {useApi} from "./hooks/useApi";
import List from "./components/shared/List/List";
import Skeleton from "react-loading-skeleton";
import PhotoCard from "./components/shared/PhotoCard/PhotoCard";

const App = () => {
    const {data, error} = useApi('https://jsonplaceholder.typicode.com/albums/1/photos?limit=10');

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <div className="App__list-wrapper">
                <List
                    data={data}
                    renderItem={(item) => <PhotoCard image={item.image} title={item.title} />}
                    loadingComponent={<Skeleton width={335} height={225} />}
                />
            </div>
        </div>
    );
}

export default App;
