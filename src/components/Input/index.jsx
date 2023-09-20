import './Input.module.css'

const Input = ({ value, onChange, type, placeholder }) => {
    return <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
}

export default Input