import { ChangeEvent } from "react";

type PropType = {
    type: string;
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    styleObject?: React.CSSProperties;
    styleString?: string;
}

export default function Input({ type = "text", placeholder, onChange, styleObject, styleString }: PropType) {

    return (
        <input
            type={type}
            style={styleObject}
            className={styleString}
            onChange={onChange}
        />
    )
}