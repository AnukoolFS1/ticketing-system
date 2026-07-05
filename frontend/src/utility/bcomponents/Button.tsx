type PropType = {
    text: string;
    functionality: () => void
    styleObject: React.CSSProperties;
    styleString: string
}


function Button({ text, functionality, styleObject, styleString }: PropType) {
    return (
        <button
            onClick={() => functionality()}
            style={styleObject}
            className={styleString}
        >
            {text}
        </button>
    )
}

export default Button