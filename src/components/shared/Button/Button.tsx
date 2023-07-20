import React from 'react';

import {useNavigate} from "react-router-dom";

import "./Button.scss";

interface IButtonProps {
    text?: string;
    onClick?: () => unknown;
}

const Button = (props: IButtonProps) => {
    const {text = "Go to homepage", onClick} = props;

    const navigate = useNavigate();

    const handleClick = () => {
        if(onClick){
            onClick()
            return
        }

        navigate("/");
    }

    return (
        <div className="Button" onClick={handleClick}>
            {text}
        </div>
    );
};

export default Button;
