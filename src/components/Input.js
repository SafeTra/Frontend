import { useState } from "react";

const Input = ({label, name, placeholder, width = 'w-100'}) => {
    const [inputText, setInputText] = useState("");
    const handleText = e => setInputText(e.target.value);

    return (
    <div className='input d-flex flex-column align-start'>
        {label && <label>{label}</label>}
        <input className={width} name={name} value={inputText} onChange={handleText} placeholder={placeholder}/>
    </div>
    );
}

export default Input;