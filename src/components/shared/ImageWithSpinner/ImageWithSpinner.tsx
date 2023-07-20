import React, {useEffect, useState} from "react";
import Spinner from "../Spinner/Spinner";

import "./ImageWithSpinner.scss";

interface IImageWithSpinnerProps {
    className?: string;
    image: string;
    title: string;
}
const ImageWithSpinner = (props: IImageWithSpinnerProps) => {
    const {image, title, className = ''} = props;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imageElement = new Image();
        imageElement.src = image;

        const handleImageLoad = () => {
            setIsLoading(false);
        };

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        imageElement.addEventListener("load", handleImageLoad);

        return () => {
            clearTimeout(timer);
            imageElement.removeEventListener("load", handleImageLoad);
        };
    }, [image]);

    return (
        <div className={`ImageWithSpinner ${className}`}>
            {isLoading ? <Spinner /> : null}
            <img
                className="ImageWithSpinner__image"
                src={image}
                alt={title}
                loading="lazy"
                style={{ display: isLoading ? "none" : "block" }}
            />
        </div>
    );
};

export default ImageWithSpinner;
