import React from 'react';

import Button from "../../components/shared/Button/Button";

import "./NotFound.scss";

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>Oops!</h1>
            <div>Sorry, an unexpected error has occurred.</div>

            <Button />
        </div>
    );
};

export default NotFound;
