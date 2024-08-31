
function Button({ type, value, buttonId }) {
    return (
        <button className={type} id={buttonId}>{value}</button>
    );
}

export default Button;