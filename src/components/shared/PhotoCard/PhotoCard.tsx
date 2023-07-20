import React from 'react';

import ImageWithSpinner from "../ImageWithSpinner/ImageWithSpinner";

import "./PhotoCard.scss";
import {truncateText} from "../../../utils/funcs";

interface IPhotoCardProps {
    image: string;
    title: string;
}

const PhotoCard = (props: IPhotoCardProps) => {
    const { image, title } = props;

    return (
        <div className="PhotoCard">
            <div className="PhotoCard__image">
                <ImageWithSpinner image={image} title={title} />
            </div>
            <div className="PhotoCard__title">
                {truncateText(title, 35)}
            </div>
        </div>
    );
};

export default PhotoCard;
