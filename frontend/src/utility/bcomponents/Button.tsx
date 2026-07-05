type PropType = {
    text: string;
    onClick: () => void
    styleObject?: React.CSSProperties;
    styleString?: string
}


function Button({ text, onClick, styleObject, styleString }: PropType) {
    return (
        <button
            onClick={() => onClick()}
            style={styleObject}
            className={styleString}
        >
            {text}
        </button>
    )
}

export default Button