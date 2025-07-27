import React, { useState } from 'react';



export default function MyInput() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
        console.log("Input value changed:", event.target.value);
    }
    function submitForm(){
        if(inputValue.length > 0){
            console.log("Form submitted with value:", inputValue);
            setInputValue(''); 
        }else{
            console.log("Input is empty, please enter a value.");
        }
    }

    return (
      <div >
             <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="border border-gray-300 rounded py-2 px-4"
            placeholder="Type something..."
        />
        <button onClick={submitForm}>Submit</button>
      </div>

    );
}