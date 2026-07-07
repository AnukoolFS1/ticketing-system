import { ChangeEventHandler } from "react";

type PropType = {
    name: string
    type: string;
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    styleObject?: React.CSSProperties;
    styleString?: string;
}

export default function Input({ type = "text", name, placeholder, onChange, styleObject, styleString }: PropType) {

    return (
        <input
            type={type}
            name={name}
            style={styleObject}
            className={styleString}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}