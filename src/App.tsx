import React from 'react';
import './App.scss';
import {useApi} from "./hooks/useApi";
import List from "./components/shared/List/List";

const App = () => {
    const {data, error} = useApi('https://jsonplaceholder.typicode.com/albums/1/photos?limit=10');

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            App start
            {data && <List data={data} />}
        </div>
    );
}

export default App;
