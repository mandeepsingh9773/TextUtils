import React, { useState } from 'react';

export default function TextForm(props) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  let countChar = 0;
  let countCons = 0;
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleVoClick = () => {
    for (let count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount(countChar);
      }
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            onChange={handleOnChange}
            id='myBox'
            rows='8'
          ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary mx-2' onClick={handleVoClick}>
          Count Vowels
        </button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className='container my-3'>
        <h3>Your Text Summary:</h3>
        <p>
          {text.split(' ').length} words and {text.length} characters
        </p>
        {/* <p>{0.008 * text.split(" ").length} Minutes to read</p> */}
        <h3>You have entered:</h3>
        <p>{count} No. of Vowels</p>
        <h2>Preview:</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
