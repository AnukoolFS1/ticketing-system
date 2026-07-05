import { CSSProperties, MouseEventHandler } from "react";

type PropType = {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    styleObject?: CSSProperties;
    styleString?: string
}


function Button({ text, onClick, styleObject, styleString }: PropType) {
    return (
        <button
            onClick={onClick}
            style={styleObject}
            className={styleString}
        >
            {text}
        </button>
    )
}

export default Button