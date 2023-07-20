import React from 'react';
import Skeleton from "react-loading-skeleton";

import "./PhotoDetailsLoader.scss";

const PhotoDetailsLoader = () => {
    return (
        <div className="PhotoDetailsLoader">
            <div className="PhotoDetailsLoader__image">
                <Skeleton height="300px"/>
            </div>

            <div className="PhotoDetailsLoader__desc">
                <Skeleton height="40px"/>
            </div>

            <div>
                <Skeleton height="255px"/>
            </div>
        </div>
    );
};

export default PhotoDetailsLoader;
