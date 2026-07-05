type PropType = {
    type: string;
    placeholder?: string;
    functionality: () => void;
    styleObject: React.CSSProperties;
    styleString: string;
}

export default function Input({ type, placeholder, functionality, styleObject, styleString }: PropType) {

    return (
        <input
            type={type || "text"}
            style={styleObject}
            className={styleString}
            onInput={functionality}
        />
    )
}