import React from 'react';

import ImageWithSpinner from "../ImageWithSpinner/ImageWithSpinner";

import {truncateText} from "../../../utils/funcs";
import {Link} from "react-router-dom";

import "./PhotoCard.scss";


interface IPhotoCardProps {
    id: number;
    image: string;
    title: string;
}

const PhotoCard = (props: IPhotoCardProps) => {
    const {id, image, title} = props;

    return (
        <Link className="PhotoCard" to={`/photos/${id}`}>
            <div className="PhotoCard__image">
                <ImageWithSpinner image={image} title={title} />
            </div>
            <div className="PhotoCard__title">
                {truncateText(title, 35)}
            </div>
        </Link>
    );
};

export default PhotoCard;
