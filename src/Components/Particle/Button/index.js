import React from "react";
import Style from "./style";

const Button = (props) => {
    const { color, size, block, onClick, className, as } = props;
    return (
        <Style
            as={as}
            className={className}
            onClick={onClick}
            block={block}
            color={color}
            size={size}
        >
            {props.children}
        </Style>
    );
};
export default Button;
