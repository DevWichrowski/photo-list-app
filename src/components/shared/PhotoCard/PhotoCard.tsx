import React from 'react';

import "./PhotoCard.scss";

interface IPhotoCardProps {
    image: string;
    title: string;
}

const PhotoCard = (props: IPhotoCardProps) => {
    const { image, title } = props;

    return (
        <div className="PhotoCard">
            <div className="PhotoCard__image">
                <img src={image} alt={title} loading="lazy"/>
            </div>
            <div className="PhotoCard__title">
                {title}
            </div>
        </div>
    );
};

export default PhotoCard;
