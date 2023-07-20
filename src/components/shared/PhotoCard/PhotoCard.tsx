import React from 'react';

import "./PhotoCard.scss";
import ImageWithSpinner from "../ImageWithSpinner/ImageWithSpinner";

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
                {title}
            </div>
        </div>
    );
};

export default PhotoCard;
