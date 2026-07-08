import { CSSProperties, MouseEventHandler } from "react";

type PropType = {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    styleObject?: CSSProperties;
    styleString?: string;
}

const buttonCommonStyleTailwind = ""

function Button({ text, onClick, styleObject, styleString }: PropType) {
    return (
        <button
            onClick={onClick}
            style={styleObject}
            className={styleString + 
                " cursor-pointer  bg-contrast text-zinc-800 px-5 py-2 rounded-lg my-2"}
        >
            {text}
        </button>
    )
}

export default Button