import { useState } from "react";

const Input = ({label, name, placeholder, width = 'w-100'}) => {
    const [inputText, setInputText] = useState("");
    const handleText = e => setInputText(e.target.value);

    return (
    <div className={`input d-flex flex-column align-start ${width}`}>
        <label>{label}</label>
        <input className="w-100" name={name} value={inputText} onChange={handleText} placeholder={placeholder}/>
    </div>
    );
}

export default Input;