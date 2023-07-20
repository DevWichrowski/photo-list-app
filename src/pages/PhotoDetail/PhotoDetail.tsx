import React from 'react';

import {useApi} from "../../hooks/useApi";

import ImageWithSpinner from "../../components/shared/ImageWithSpinner/ImageWithSpinner";
import {useParams} from "react-router-dom";

import "./PhotoDetail.scss";
import PhotoDetailsLoader from "../PhotoDetailsLoader/PhotoDetailsLoader";

const PhotoDetail = () => {
    const {id} = useParams();

    const {data} = useApi(`https://jsonplaceholder.typicode.com/photos/${id}`);

    if(!data) {
        return <PhotoDetailsLoader />
    }

    return (
        <div className="PhotoDetail">
            <div className="PhotoDetail__container">
                <ImageWithSpinner className="PhotoDetail__image" image="https://via.placeholder.com/600/92c952"
                                  title="title" />
                <h1>{data.title}</h1>
            </div>

            <div className="PhotoDetail__details">
                <table>
                    <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{data[key]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PhotoDetail;
