import './Input.module.css'

const Input = ({ value, onChange, type, placeholder, name, className }) => {
    return <input 
                type={type ? type : "text"} 
                value={value} // menyimpan hasil input dari user
                onChange={onChange} // event handler yang dilakukan oleh user
                placeholder={placeholder} 
                name={name}
                className={className}
            />
}

export default Input