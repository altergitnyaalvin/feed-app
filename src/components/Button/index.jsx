const Button = ({ text, onClick, className, id }) => {
    return <button className={className} id={id} onClick={onClick}>{text}</button>
}

export default Button