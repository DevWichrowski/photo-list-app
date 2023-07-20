import React, {useEffect, useState} from "react";
import Spinner from "../Spinner/Spinner";

interface IImageWithSpinnerProps {
    image: string;
    title: string;
}

interface IImageWithSpinnerProps {
    image: string;
    title: string;
}

const ImageWithSpinner = (props: IImageWithSpinnerProps) => {
    const {image, title} = props;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imageElement = new Image();
        imageElement.src = image;

        const handleImageLoad = () => {
            setIsLoading(false);
        };

        const handleImageError = () => {
            setIsLoading(false);
        };

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 10000);

        imageElement.addEventListener("load", handleImageLoad);
        imageElement.addEventListener("error", handleImageError);

        return () => {
            clearTimeout(timer);
            imageElement.removeEventListener("load", handleImageLoad);
            imageElement.removeEventListener("error", handleImageError);
        };
    }, [image]);

    return (
        <div className="ImageWithSpinner">
            {isLoading ? <Spinner /> : null}
            <img
                src={image}
                alt={title}
                loading="lazy"
                style={{ display: isLoading ? "none" : "block" }}
            />
        </div>
    );
};

export default ImageWithSpinner;
